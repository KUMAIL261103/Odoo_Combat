import { LoginBottomWarning } from "../components/LoginBottomWarning";
import { LoginButton } from "../components/LoginButton";
import { LoginHeading } from "../components/LoginHeading";
import { LoginInputBox } from "../components/LoginInputBox";
import { LoginSubHeading } from "../components/LoginSubHeading";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import signinPageImg from "../assets/signinPage.avif";

export const Signin = () => {
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
              />
              <LoginInputBox
                placeholder="Password"
                icon={<RiLockPasswordLine color="white" />}
              />
            </div>
            <div className="mt-14">
              <LoginButton label={"Login"} />
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
