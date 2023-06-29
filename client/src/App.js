import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ResetPassword from './ResetPassword'
import ForgotPassword from "./ForgotPassword"
import Login from "./Login"
import Register from "./Register"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="password-reset-tm.netlify.app" Component={Register} />
        <Route path="password-reset-tm.netlify.app/login" Component={Login} />
        <Route
          path="password-reset-tm.netlify.app/forgot-password"
          Component={ForgotPassword}
        />
        <Route
          path="password-reset-tm.netlify.app/api/v1/reset_password/:id/:token"
          Component={ResetPassword}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
