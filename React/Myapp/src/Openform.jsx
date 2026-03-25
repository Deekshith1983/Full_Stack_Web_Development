import './App.css'

function Openform() {
  return (
    <>
      <h1>This is a form</h1>
      <div className="form">
        <form action="" method="get">
          <div>
          <label htmlFor="Name">Name:</label>
          <input type="text" id="Name" placeholder='Enter your name' />
          </div>
          <div>
          <label htmlFor="Email">Email:</label>
          <input type="email" id="Email" placeholder='Enter your email' />
          </div>
          <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder='Enter your password' />
          </div>
          <div>
          <label htmlFor="Address">Address:</label>
          <input type="text" id="Address" placeholder='Enter your address' />
          </div>
          <div>
          <label htmlFor="Complaint">Describe your Complaint:</label>
          <br />
          <textarea id="Complaint" placeholder='Enter your complaint' />
          </div>
          <button onClick={() => {alert('Form submitted!')}}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Openform;