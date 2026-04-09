import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setData(res.data))
      .catch(() => {
        setData("Unauthorized");
      });
  }, []);

  return <h1>{data}</h1>;
}

export default Dashboard;