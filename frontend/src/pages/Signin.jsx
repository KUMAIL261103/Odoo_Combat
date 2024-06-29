import { LoginBottomWarning } from "../components/LoginBottomWarning";
import { LoginButton } from "../components/LoginButton";
import { LoginHeading } from "../components/LoginHeading"
import { LoginInputBox } from "../components/LoginInputBox"
import { LoginSubHeading } from "../components/LoginSubHeading"
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";





export const Signin = () => {
    return <>
    <div className="bg-slate-950 h-screen flex">
        <div className="flex flex-col pt-20 w-1/2">
        <div className="py-6 px-9 h-max justify-start">
            <LoginHeading label={"Login"}/>
            <LoginSubHeading label={"always a pleasure to have you back"}/>
            <div className="mt-16">
            <LoginInputBox placeholder="Email" icon={<MdOutlineMail color="white"/>}/>
            <LoginInputBox placeholder="Password" icon={<RiLockPasswordLine color="white"/>}/>
            </div>
            <div className="mt-14">
                <LoginButton label={"Login"} />
            </div>
            <LoginBottomWarning label={"Dont have an account?"}  buttonText={"Sign in"} to={"/signin"}/>

            </div>

        </div>
        <div className="w-1/2">
            <div className="text-white text-4xl flex flex-col pt-28 pl-20">
            <span>
            Challenge your skills
                </span>
            <span>
            compete with the best
                </span>
            </div>
        </div>

    </div>
    </>
} 