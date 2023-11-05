import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    setPasswordError("");

    signIn(email, password)
      .then((result) => {
        toast.success("Successfully login to the account!");
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        toast.success("Successfully login to the account!");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero bg-base-200 pt-12 pb-32">
      <ToastContainer position="top-center" />
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Please Login Here
          </h1>
        </div>
        <div className=" w-full  rounded-xl hover:shadow-2xl hover:shadow-[#429FFD] shadow-2xl bg-base-100 mt-10 pb-8">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="ring-1 ring-gray-300 bg-transparent px-4 py-3 mt-2 rounded-full outline-none focus:ring-2 focus:ring-[#429FFD]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="ring-1 ring-gray-300 bg-transparent px-4 py-3 mt-2 rounded-full outline-none focus:ring-2 focus:ring-[#429FFD]"
                required
              />
              <label className="label font-semibold">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>

            {passwordError && <p className="text-red-500">{passwordError}</p>}

            <div className="form-control mt-6">
              <button className="btn rounded-full  text-white bg-[#429FFD] hover:bg-transparent hover:border-2 hover:border-[#429FFD] hover:text-[#429FFD]">
                Login
              </button>
            </div>
            <p className="text-center font-semibold">Or</p>
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-outline rounded-full border-2 border-[#429FFD]  hover:bg-[#429FFD] hover:text-white hover:border-none "
            >
              <FcGoogle className="text-2xl" />{" "}
              <span className="ml-2">Google</span>{" "}
            </button>
          </form>
          <p className="text-center">
            New in Dream Wedding?
            <Link to="/register" className="text-[#429FFD] ml-2 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
