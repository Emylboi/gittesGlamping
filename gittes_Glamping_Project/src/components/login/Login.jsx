
import useAuth from "../../hooks/useAuth";
import styles from "./login.module.css";

// This is the login component. It uses the useAuth hook to handle the login functionality.
const Login = () => {
  const { setEmail, setPassword, error, signIn } = useAuth();

  return (
    <div className={styles.container}>
      <form onSubmit={signIn} className={styles.form}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Email'
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />

        <button type='submit'>Log ind</button>
      </form>
    </div>
  );
};

export default Login;
