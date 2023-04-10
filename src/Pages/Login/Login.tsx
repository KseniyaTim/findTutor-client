//react
import { FC, useState } from "react";

import { IGenericField } from "../../Components/Generics/GenericField/IGenericField";

//consts
import { LOGIN_HEADERS } from "../../consts/loginHeaders";

//css
import './Login.css'
import GenericForm from "../../Components/Generics/GenericForm/GenericForm";

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
