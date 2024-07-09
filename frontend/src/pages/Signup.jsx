import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { LoginBottomWarning } from "../components/LoginBottomWarning";
import { LoginButton } from "../components/LoginButton";
import { LoginHeading } from "../components/LoginHeading";
import { LoginInputBox } from "../components/LoginInputBox";
import { LoginSubHeading } from "../components/LoginSubHeading";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

import signinPageImg from "../assets/signinPage.avif";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSignup = () => {
    const requestBody = {
      firstName,
      lastName,
      email,
      password,
      role,
    };
    console.log("Request Body:", requestBody); // Add this line to debug
    async function signupdata() {
      try {
      const response = await fetch(
        "https://odoo-combat-cgs8.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      const data = await response.json();
      if (data.success) {
        // window.location.href = "/signin";
        toast.success(`Successfully signed up, ${firstName}!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      })
      console.log(data);
      setTimeout(() => {
        window.location.href = "/signin";
      }, 1000);
    } else {
      // Show error toast
      toast.error("Signup failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    console.log(data);
  } catch (error) {
    console.error("Signup error:", error);
    toast.error("An error occurred. Please try again later.");
  }
}
signupdata();
};


  return (
    <>
    <ToastContainer />
      <div className="bg-slate-950 flex h-screen pt-16 pl-20 pr-20   ">
        <div className="flex flex-col w-1/2">
          <div className=" px-9 justify-start">
            <LoginHeading label={"Sign up"} />
            <LoginSubHeading label={"Welcome"} />

            <div className="mt-1 flex flex-col space-y-4">
              <LoginInputBox
                placeholder="Email"
                icon={<MdOutlineMail color="white" />}
                value={email}
                onChange={setEmail}
              />
              <LoginInputBox
                placeholder="Name"
                icon={<IoPersonOutline color="white" />}
                value={firstName}
                onChange={setName}
              />
              <LoginInputBox
                placeholder="Lastname"
                icon={<IoPersonOutline color="white" />}
                value={lastName}
                onChange={setLastname}
              />
              <LoginInputBox
                placeholder="Password"
                icon={<RiLockPasswordLine color="white" />}
                value={password}
                onChange={setPassword}
              />
              <select
                className="block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">user</option>
                <option value="manager">manager</option>
                <option value="admin">admin</option>
              </select>
            </div>
            <div className="mt-3">
              <LoginButton label={"Sign up"} onClick={handleSignup} />
              <LoginBottomWarning
                label={"Already have an account?"}
                buttonText={"Sign in"}
                to={"/signin"}
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col m-auto justify-center">
          {" "}
          <img
            src={signinPageImg}
            alt="Landing Page"
            className="  object-cover h-[80vh] w-[60vh] pb-10"
          />
        </div>
      </div>
    </>
  );
};
