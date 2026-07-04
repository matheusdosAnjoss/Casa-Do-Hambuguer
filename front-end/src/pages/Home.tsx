import { Link } from "react-router";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Link to="/login">Login</Link>;<Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
