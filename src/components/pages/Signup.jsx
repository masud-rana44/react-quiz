import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import signupImage from "../../assets/images/signup.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} alt={"Signup"} />
        <Form style={{ height: "500px" }}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox label={"I agree to the Terms & Conditions"} />

          <Button>
            <span>Submit now</span>
          </Button>

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
