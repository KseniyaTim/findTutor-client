//react
import { FC, useState } from "react";

// interfaces
import { IGenericField } from "../../Components/Generics/GenericField/IGenericField";

//css
import './Login.css'

// components
import GenericForm from "../../Components/Generics/GenericForm/GenericForm";

// consts
import { LOGIN_HEADERS } from "./LoginData";

const Login: FC = () => {

  const [loginFields, setLoginFields] = useState<IGenericField[]>(LOGIN_HEADERS)

  const handleLogin = () => {
    
  }
  return (
    <div>
      <div className="loginWrapper">
        <GenericForm
          formTitle={"בוא נתחבר"}
          formFields={loginFields}
          setFormFields={setLoginFields}
          buttonTitle={"התחבר"}
          handleButtonFunc={handleLogin}
        />
      </div>

      <div id="forgotPassword">שכחתי סיסמה</div>

    </div>

  );
};

export default Login;
