import loginImage from "../../assets/images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} alt="Login illustration" />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
