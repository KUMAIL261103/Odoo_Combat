import { LoginBottomWarning } from "../components/LoginBottomWarning";
import { LoginButton } from "../components/LoginButton";
import { LoginHeading } from "../components/LoginHeading";
import { LoginInputBox } from "../components/LoginInputBox";
import { LoginSubHeading } from "../components/LoginSubHeading";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import signinPageImg from "../assets/signinPage.avif";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const requestBody = {
      email,
      password,
    };
    console.log("Request Body:", requestBody); // Add this line to debug
    async function logindata() {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = "/home";
      }
      console.log(data);
    }
    logindata();
  };
  return (
    <>
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
              buttonText={"Sign in"}
              to={"/signin"}
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
