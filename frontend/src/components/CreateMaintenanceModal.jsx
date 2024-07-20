import { useState } from "react";
import PropTypes from "prop-types";

export default function CreateMaintenance({ facility, closeModal, FacilityId }) {
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Note, setNote] = useState("");

  const createMaintenancefunc = async () => {
    const backendapi =  import.meta.env.VITE_API_URL || "http://localhost:3000";
    await fetch(`${backendapi}/api/Maintenances/scheduleMaintenance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        facilityId: FacilityId,
        note: Note,
        MaintenanceDate: Date,
        title: Title
      }),
    })
      .then((response) => response.json())
      .then((data) => { 
        console.log(data);
        
      })
      .catch((error) => {
        console.error("Error creating maintenance:", error);
       
      });

    closeModal();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMaintenancefunc();
  };

  return (
    <div className="flex items-center justify-center min-h-screen fixed inset-0 z-[1000] place-items-center overflow-auto bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold text-center">Create Maintenance for {facility}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="title" className="text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
              placeholder="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="date" className="text-sm font-semibold">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
              placeholder="Date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="note" className="text-sm font-semibold">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
              placeholder="Note"
              value={Note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Create
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Props validation
CreateMaintenance.propTypes = {
  facility: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  FacilityId: PropTypes.string.isRequired,
};
