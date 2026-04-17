const express = require("express");
const session = require("express-session");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const path = require("path");

// in server.js
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb+srv://dikideeku_db_user:HX5eqUGgslyqoJCZ@assign.cwktcsv.mongodb.net/ProfileDB?appName=Assign")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error:", err));

// ✅ MIDDLEWARE - MUST BE BEFORE ROUTES
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5000",
  credentials: true
}));

app.use(session({
  secret: "github_oauth_secret",
  resave: false,
  saveUninitialized: true
}));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// SAVE PROFILE
app.post("/save-profile", async (req, res) => {
  try {
    const { name, role, skills, githubUser } = req.body;

    if (!name || !role || !githubUser) {
      return res.status(400).json({ success: false, error: "Missing required fields: name, role, githubUser" });
    }

    console.log("💾 POST /save-profile");
    console.log("   - Session ID:", req.sessionID);
    console.log("   - Session verified:", req.session.verified);
    console.log("   - GitHub User:", githubUser);

    const user = new User({
      name,
      role,
      skills: skills || [],
      githubUser,
      githubVerified: req.session.verified === true  // ✅ Explicit true check
    });

    const savedUser = await user.save();
    console.log("✅ User saved with githubVerified:", savedUser.githubVerified);

    res.json({ success: true, user: savedUser });
  } catch (err) {
    console.error("❌ Save profile error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// STEP 1: Redirect to GitHub OAuth
app.get("/auth/github", (req, res) => {
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=read:user`;
  res.redirect(githubAuthUrl);
});

// STEP 2: Callback from GitHub
app.get("/auth/github/callback", async (req, res) => {
  const code = req.query.code;
  const inputProfile = req.session.inputProfile;

  console.log("🔹 OAuth Callback - inputProfile:", inputProfile);

  try {
    const tokenRes = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      },
      { headers: { Accept: "application/json" } }
    );

    const accessToken = tokenRes.data.access_token;

    const userRes = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const githubUsername = userRes.data.login;
    const inputUsername = inputProfile.split("github.com/")[1];

    const isVerified =
      githubUsername.toLowerCase() === inputUsername.toLowerCase();

    console.log("🔹 OAuth Verification - GitHub:", githubUsername, "Input:", inputUsername, "Verified:", isVerified);

    // ✅ STORE RESULT IN SESSION
    req.session.verified = isVerified;
    console.log("🔹 Session verified set to:", req.session.verified);

    // ✅ REDIRECT WITH loaded=true TO RESTORE SESSION DATA
    res.redirect("http://localhost:5000/index.html?loaded=true");
  } catch (err) {
    console.error("🔹 OAuth Error:", err.message);
    req.session.verified = false;
    res.redirect("http://localhost:5000/index.html?loaded=true");
  }
});

app.get("/get-verification", (req, res) => {
  const result = req.session.verified;
  console.log("🔹 GET /get-verification - current verified:", result);

  // ✅ DO NOT CLEAR the session here - let it persist for /save-profile
  // req.session.verified = null;

  res.json({ verified: result });
});

// ✅ GET USER FROM DATABASE BY GITHUB USER
app.get("/get-user/:githubUser", async (req, res) => {
  try {
    const user = await User.findOne({ githubUser: req.params.githubUser });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.json({ success: true, user });
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Store profile before OAuth
app.get("/set-profile", (req, res) => {
  const profile = req.query.profile;
  req.session.inputProfile = profile;
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));