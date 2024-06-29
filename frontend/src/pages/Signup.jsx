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
  return (
    <>
      <div className="bg-slate-950 flex h-screen pt-16 pl-20 pr-20   ">
        <div className="flex flex-col w-1/2">
          <div className=" px-9 justify-start">
            <LoginHeading label={"Sign up"} />
            <LoginSubHeading label={"Welcome"} />

            <div className="mt-1 flex flex-col space-y-4">
              <LoginInputBox
                placeholder="Email"
                icon={<MdOutlineMail color="white" />}
              />
              <LoginInputBox
                placeholder="Name"
                icon={<IoPersonOutline color="white" />}
              />
              <LoginInputBox
                placeholder="Surname"
                icon={<IoPersonOutline color="white" />}
              />
              <LoginInputBox
                placeholder="Password"
                icon={<RiLockPasswordLine color="white" />}
              />
              <select className="block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0">
                <option value="option1">User</option>
                <option value="option2">Manager</option>
                <option value="option3">Authority</option>
              </select>
            </div>
            <div className="mt-3">
              <LoginButton label={"Login"} />
              <LoginBottomWarning
                label={"Dont have an account?"}
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
