import React from "react"
import { useNavigate, useParams } from "react-router-dom"

import axios from "axios"

const ResetPassword = () => {
  const param = useParams()
  const refresh = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.password.value)

    axios
      .post(
        `https://password-reset-ztnv.onrender.com/api/v1/reset_password/${param.id}/${param.token}`,
        {
          password: e.target.password.value,
        }
      )
      .then((response) => {
        alert(response.data.message)
        refresh("/login")
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="container ">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center my-5">Reset Password</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mx-5">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Enter a new password"
                    required={true}
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

export default ResetPassword
