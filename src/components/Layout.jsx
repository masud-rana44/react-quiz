import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <section className={classes.container}>{children}</section>
      </main>
    </>
  );
};

export default Layout;
