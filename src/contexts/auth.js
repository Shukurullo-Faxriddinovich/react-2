import { createContext } from "react";
import App from "../App";
import UnauthApp from "../unauth-app";

const AuthContext = createContext();

const AuthProvider = () =>{
  const [token, setToken] = useState();
  return(
    <AuthContext.Provider value={{token, setToken}}>
      {token ? <App /> : <UnauthApp /> }
    </AuthContext.Provider>
  )
}