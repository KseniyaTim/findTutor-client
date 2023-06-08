//react
import { FC, useState } from "react";

// interfaces

//css
import './Login.css'

// components

// consts
import { LOGIN_HEADERS } from "./LoginData";

const Login: FC = () => {

  const [loginFields, setLoginFields] = useState(LOGIN_HEADERS)

  const handleLogin = () => {
    
  }
  return (
    <div>
      <div className="loginWrapper">
      sas
      </div>

      <div id="forgotPassword">שכחתי סיסמה</div>

    </div>

  );
};

export default Login;
