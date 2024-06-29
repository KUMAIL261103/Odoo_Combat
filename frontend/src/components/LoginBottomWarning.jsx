import { Link } from "react-router-dom"

export function LoginBottomWarning({label, buttonText, to}) {
    return <div className="py-2 text-md flex justify-center text-white">
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
            {buttonText}
        </Link>
    </div>
}