import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Register = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const refresh = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json()
    console.log(data.token)
    localStorage.setItem("token", data.token)
    if (data.user) {
      alert("Register successful")
      refresh("/login")
    } else {
      alert("Register failed")
    }
  }

  return (
    <div className="container ">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
            <h1 className="card-title text-center">Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mx-5">
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <br />
              <div className="mb-3 mx-5">
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <br />
              <div className="mb-1 mx-5">
                <input
                  className="form-control "
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <br />
              <div className="text-center">
                <Link to="/login">
                  <input
                    className="btn btn-primary my-3 "
                    type="submit"
                    value="Already a member? Login"
                  />
                </Link>
              </div>
              <div className="text-center">
                <input
                  className="btn btn-primary my-3 "
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
