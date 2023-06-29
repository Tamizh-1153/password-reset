import React from "react"
import axios from "axios"

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)

    axios
      .post("http://localhost:5000/api/v1/forgot_password", {
        email: e.target.email.value,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <div className="container ">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center my-5">Forgot Password</h3>
              <form onSubmit={handleSubmit} >
                <div className="mb-3 mx-5">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-primary my-3" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
