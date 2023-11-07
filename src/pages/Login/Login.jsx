import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

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
    <div className="bg_image hero bg-base-200 pt-6 pb-12">
      <ToastContainer position="top-center" />
      <div className="hero-content flex-col">
        <div className="flex flex-col justify-center items-center text-center lg:text-left text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Welcome</h1>
          <span className=" mb-5 text-lg">to Your account</span>
          <BsPersonCircle className="text-[80px]" />
        </div>
        <div className=" w-full md:min-w-[450px]  rounded-xl bg-base-100 mt-4 pb-8">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                type="email"
                name="email"
                placeholder="Type your email"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
                required
              />
            </div>

            <div className="form-control mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
              <input
                type="password"
                name="password"
                placeholder="Type your password"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
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
              <button className="btn rounded-lg  text-white bg-[#D70F64] hover:bg-transparent hover:border-2 hover:border-[#D70F64] hover:text-[#D70F64]">
                Login
              </button>
            </div>
            <p className="flex items-center justify-center space-x-2">
              <span className="h-px bg-gray-400 w-14"></span>
              <span className="font-normal text-[#D70F64]">Or Login with</span>
              <span className="h-px bg-gray-400 w-14"></span>
            </p>
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-outline rounded-lg border-2 border-[#D70F64]  hover:bg-[#D70F64] hover:text-white hover:border-none "
            >
              <FcGoogle className="text-2xl" />{" "}
              <span className="ml-2">Google</span>{" "}
            </button>
          </form>
          <p className="text-center">
            New in Share Eats?
            <Link to="/register" className="text-[#D70F64] ml-2 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
