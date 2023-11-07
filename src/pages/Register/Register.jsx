import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import "../Login/Login.css";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    //  password validation
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters.");
      return;
    }

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please add at least one special character");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please add at least one capital letter");
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        toast.success("User Created Successfully!");
        const createdUser = result.user;
        form.reset();
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        console.log("register page", createdUser);
      })
      .catch((error) => {
        setPasswordError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("User Created Successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg_image hero bg-base-200 pt-6 pb-12">
      <Helmet>
        <title>Share Eats | Register</title>
      </Helmet>
      <ToastContainer position="top-center" />
      <div className="hero-content flex-col">
        <div className="flex flex-col justify-center items-center text-center lg:text-left text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Welcome</h1>
          <span className=" mb-5 text-lg">Create Your account</span>
          <BsPersonCircle className="text-[80px]" />
        </div>
        <div className=" w-full md:min-w-[450px] rounded-xl  bg-base-100 mt-10 pb-8">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Name
              </div>

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Photo URL
              </div>

              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Email
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-5">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Your Password
              </div>

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full text-lg py-2 border-b-2 border-[#D70F64] focus:outline-none"
                required
              />
            </div>

            <p className="text-rose-600">{passwordError}</p>

            <div className="form-control mt-6">
              <button className="btn rounded-lg  text-white bg-[#D70F64] hover:bg-transparent hover:border-2 hover:border-[#D70F64] hover:text-[#D70F64]">
                Register
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
            Already have an account?
            <Link to="/login" className="text-[#D70F64] font-bold ml-2">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
