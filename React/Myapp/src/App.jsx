import './App.css'

function App() {
  
  return (
    <>
      <h1>Hello World!</h1>
      <hr />
      <div className="container-fluid d-flex flex-column align-items-center">
      <form>
        <div>
          <label id="1">Name:</label>
          <input type="text" placeholder="enter your name:" />
        </div>
        <div>
          <label htmlFor="emailaddress">Email address</label>
          <input type="email" placeholder="enter your email:" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="enter your password:" />
        </div>
          <button type="submit" onClick={() => {
            alert("Form submitted successfully!")
          }}>
            Submit
          </button>
      </form>
      </div>
    </>
  )
}

export default App
