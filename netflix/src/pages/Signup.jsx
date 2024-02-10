import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberLogin, setRememberLogin] = useState(true);

  const { user, signUp } = userAuth();
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-20 z-2">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign up</h1>
              <form
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="p-3 bg-gray-700 rounded my-2"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="p-3 bg-gray-700 rounded my-2"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="bg-red-600 rounded font-bold py-3 my-6">
                  Sign up
                </button>

                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600 mr-2">
                    Already Subscribed to Netflix?{" "}
                  </span>
                  <Link to="/login">Sign in </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
