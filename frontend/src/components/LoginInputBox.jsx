export function LoginInputBox({placeholder, icon}) {
    return (
        <div className="mt-5"> {/* Add mt-4 class for margin-top */}
            <div className="flex justify-start h-10 border rounded-md border-slate-600 pl-4">
                <div className="py-3">
                    {icon}
                </div>
                <input placeholder={placeholder} className="pl-3 bg-slate-950 w-full" />
            </div>
        </div>
    );
}