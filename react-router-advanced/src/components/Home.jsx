import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile</Link>
      <br />
      <Link to="/post/123">View Post 123</Link>
    </div>
  );
}

export default Home;
