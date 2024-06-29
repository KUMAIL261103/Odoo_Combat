import { useNavigate } from "react-router-dom";


export default function CreateMaintenance({ label }) {
    const navigate = useNavigate();
    return (
    
        <div className="flex bg-black justify-between items-center p-4 w-3/4 max-w-md">
          <div className="text-white">{label}</div>
          <div className="flex space-x-2">
            <button className="bg-light-green text-black py-2 px-4 rounded">Create</button>
            <button className="bg-light-green text-black py-2 px-4 rounded"
            onClick={() => navigate('/maintenance-log')}
            >More Logs</button>
          </div>
        </div>

    );
  }
  