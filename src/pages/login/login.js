const Login = () =>{
  return(
    <form>
      <h1>Login</h1>
      <input placeholder="Email" type="email" aria-label="Email"></input>
      <input placeholder="password" type="password" aria-label="Password"></input>
      <button type="submit">submit</button>
    </form>
  )
}

export default Login;