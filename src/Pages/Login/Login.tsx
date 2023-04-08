//react
import  { FC } from "react";

//components

//consts
import { LOGIN_HEADERS } from "../../consts/loginHeaders";

//css
import './Login.css'
import GenericForm from "../../Components/Generics/GenericForm/GenericForm";

const Login: FC = () => {
  return (
    <div className="loginWrapper">
      <GenericForm
        formTitle={"בוא נתחבר"}
        formFields={LOGIN_HEADERS}
        buttonTitle={"התחבר"}
      />
    </div>
  );
};

export default Login;
