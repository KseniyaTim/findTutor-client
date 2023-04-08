//react
import  { FC } from "react";

//components
import GenericFeild from "../../Generics/GenericForm/GenericForm";

//consts
import { LOGIN_HEADERS } from "../../consts/loginHeaders";

//css
import './Login.css'

const Login: FC = () => {
  return (
    <div className="loginWrapper">
      <GenericFeild
        formTitle={"בוא נתחבר"}
        formFields={LOGIN_HEADERS}
        buttonTitle={"התחבר"}
      />
    </div>
  );
};

export default Login;
