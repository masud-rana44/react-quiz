import loginImage from "../../assets/images/login.svg";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} alt="Login illustration" />

        <Form style={{ height: "330px" }}>
          <TextInput
            type={"text"}
            placeholder={"Enter email"}
            icon={"alternate_email"}
          />

          <TextInput
            type={"password"}
            placeholder={"Enter password"}
            icon={"lock"}
          />

          <Button>
            <span>Submit now</span>
          </Button>

          <div className="info">
            Don&apos;t have an account? <a href="signup.html">Signup</a>{" "}
            instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
