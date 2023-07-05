import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import Loader from "./Loader";
import TextInput from "./TextInput";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to login!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <TextInput
        type={"text"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Enter email"}
        icon={"alternate_email"}
        required
      />

      <TextInput
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Enter password"}
        icon={"lock"}
        required
      />

      {error && <p className="error">{error}</p>}

      <Button type="submit" disabled={loading}>
        {loading ? <Loader /> : <span>Submit now</span>}
      </Button>

      <div className="info">
        Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
