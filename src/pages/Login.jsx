import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
        // form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="t lg:w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 lg:w-1/2">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <h1 className="text-3xl font-bold text-center py-6">Login</h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#FF3811] border-[#FF3811] text-white">
                Login
              </button>
            </div>
          </form>
          <p className="text-center pb-6">
            New to Car Doctors
            <Link to={"/signUp"}>
              <span className="font-bold text-[#FF3811]"> Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
