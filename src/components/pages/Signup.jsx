import Illustration from "../Illustration";
import SignupForm from "../SignupForm";
import signupImage from "../../assets/images/signup.svg";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} alt={"Signup"} />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
