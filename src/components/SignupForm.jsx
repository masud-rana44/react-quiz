import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (password !== confirmPassword) {
      return setError("Password and Confirm password don't match!");
    }

    try {
      setLoading(true);
      setError("");
      await signup(email, password, username);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to create an account!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter name"
        icon="person"
        required
      />
      <TextInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        icon="alternate_email"
        required
      />
      <TextInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        icon="lock"
        required
      />
      <TextInput
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
        icon="lock_clock"
        required
      />

      {error && <p className="error">{error}</p>}

      <Checkbox
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        label={"I agree to the Terms & Conditions"}
        required
      />

      <Button type="submit" disabled={loading}>
        <span>Submit now</span>
      </Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
