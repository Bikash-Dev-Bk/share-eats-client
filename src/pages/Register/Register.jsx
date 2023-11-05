import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

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
    <div className="hero bg-base-200 pt-12 pb-32">
      <ToastContainer position="top-center" />
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Please Register Here
          </h1>
        </div>
        <div className=" w-full rounded-xl hover:shadow-2xl hover:shadow-[#429FFD] shadow-2xl bg-base-100 mt-10 pb-8">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="ring-1 ring-gray-300 bg-transparent px-4 py-3 mt-2 rounded-full outline-none focus:ring-2 focus:ring-[#429FFD]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="ring-1 ring-gray-300 bg-transparent px-4 py-3 mt-2 rounded-full outline-none focus:ring-2 focus:ring-[#429FFD]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="ring-1 ring-gray-300 bg-transparent px-4 py-3 mt-2 rounded-full outline-none focus:ring-2  focus:ring-[#429FFD]"
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
            </div>

            <p className="text-rose-600">{passwordError}</p>

            <div className="form-control mt-6">
              <button className="btn rounded-full  text-white bg-[#429FFD] hover:bg-transparent hover:border-2 hover:border-[#429FFD] hover:text-[#429FFD]">
                Register
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
            Already have an account?
            <Link to="/login" className="text-[#429FFD] font-bold ml-2">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
