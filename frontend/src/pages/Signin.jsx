import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginBottomWarning } from "../components/LoginBottomWarning";
import { LoginButton } from "../components/LoginButton";
import { LoginHeading } from "../components/LoginHeading";
import { LoginInputBox } from "../components/LoginInputBox";
import { LoginSubHeading } from "../components/LoginSubHeading";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import signinPageImg from "../assets/signinPage.avif";
import { useNavigate } from "react-router-dom";
export const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const requestBody = {
      email,
      password,
    };
    console.log("Request Body:", requestBody); // Add this line to debug
    async function logindata() {
      try {
      const response = await fetch(
        "https://odoo-combat-cgs8.onrender.com/api/auth/login",
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
        // window.location.href = "/home";
        // localStorage.setItem("token", data.token);
        // localStorage.setItem("user", JSON.stringify(data.user));
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("user", JSON.stringify(data.user));

        toast.success(`Welcome back, ${data.user.firstName}!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          
        });
        


          setTimeout(() => {
            if (data.user.role === "manager") {
              navigate("/maintenance");
            } else if (data.user.role === "user" || data.user.role === "admin") {
              navigate("/facility");
            }
          }, 1000);
        } else {
          toast.error("Login failed. Please check your credentials.", {
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
        console.error("Login error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
    logindata();
  };
  return (
    <>
       <ToastContainer />
      <div className="bg-slate-950 h-screen pt-20 pl-20 pr-20 flex">
        <div className="flex flex-col w-1/2  ">
          <div className="pt-6 px-9 justify-start">
            <LoginHeading label={"Login"} />
            <LoginSubHeading label={"always a pleasure to have you back"} />
            <div className="mt-16">
              <LoginInputBox
                placeholder="Email"
                icon={<MdOutlineMail color="white" />}
                value={email}
                onChange={setEmail}
              />
              <LoginInputBox
                placeholder="Password"
                icon={<RiLockPasswordLine color="white" />}
                value={password}
                onChange={setPassword}
              />
            </div>
            <div className="mt-14">
              <LoginButton label={"Login"} onClick={handleLogin} />
            </div>
            <LoginBottomWarning
              label={"Dont have an account?"}
              buttonText={"Sign Up"}
              to={"/signup"}
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center m-auto">
          <div className=" flex items-center justify-center">
            <img
              src={signinPageImg}
              alt="Landing Page"
              className="w-[90%] h-[60%]  object-cover h-[70vh] w-[60vh] pb-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};
