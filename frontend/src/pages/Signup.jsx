
import { LoginBottomWarning } from "../components/LoginBottomWarning";
import { LoginButton } from "../components/LoginButton"
import { LoginHeading } from "../components/LoginHeading"
import { LoginInputBox } from "../components/LoginInputBox"
import { LoginSubHeading } from "../components/LoginSubHeading"
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

export const Signup = () => {
    return (
        <div className="bg-slate-950 h-screen flex flex-col overflow-hidden">
            <div className="flex flex-1">
                <div className="flex flex-col justify-between w-1/2 p-4">
                    <div>
                        <LoginHeading label={"Sign up"} />
                        <LoginSubHeading label={"always a pleasure to have you back"} />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <LoginInputBox placeholder="Email" icon={<MdOutlineMail color="white" />} />
                        <LoginInputBox placeholder="Name" icon={<IoPersonOutline color="white" />} />
                        <LoginInputBox placeholder="Surname" icon={<IoPersonOutline color="white" />} />
                        <LoginInputBox placeholder="Password" icon={<RiLockPasswordLine color="white" />} />
                    </div>
                    <div>
                        <LoginButton label={"Login"} />
                        <LoginBottomWarning label={"Dont have an account?"} buttonText={"Sign in"} to={"/signin"} />
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <div className="text-white text-[3vw] flex flex-col">
                        <span>Challenge your skills</span>
                        <span>compete with the best</span>
                    </div>
                </div>
            </div>
        </div>
    );
}