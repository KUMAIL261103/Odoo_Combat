import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AdminNavbar from "../components/AdminNavbar";
import { useState } from "react";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  location: z.string().nonempty({ message: "Location is required" }),
  image: z.string().url({ message: "Please enter a valid image URL" }),
  amenities: z.string().nonempty({ message: "Amenities are required" }),
  price: z.string().nonempty({ message: "Price is required" }),
});

const CreateFacility = () => {
  const [message, setMessage] = useState({ type: '', content: '' });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const backendapi = import.meta.env.VITE_API_URL || "http://localhost:3000";
    try {
      const response = await fetch(`${backendapi}/api/facilities/createFacility`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', content: 'Facility created successfully!' });
        reset();
      } else {
        setMessage({ type: 'error', content: result.message || 'Failed to create facility. Please try again.' });
      }
    } catch (error) {
      console.error("Error creating facility:", error);
      setMessage({ type: 'error', content: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white mb-6">Create Facility</h1>
          {message.content && (
            <div className={`mb-4 p-3 rounded ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {message.content}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {["name", "location", "imageUrl", "amenities", "price"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "price" ? "number" : "text"}
                  id={field}
                  {...register(field)}
                  className="w-full p-3 bg-slate-700 text-white border border-slate-600 rounded-md outline-none focus:ring-2 focus:ring-light-green transition duration-200"
                  placeholder={`Enter ${field}`}
                />
                {errors[field] && (
                  <p className="text-red-400 text-xs mt-1">{errors[field].message}</p>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="bg-light-green text-black py-2 px-6 rounded-md hover:bg-green-400 transition duration-300"
              >
                Create
              </button>
              <button
                type="button"
                onClick={() => {
                  reset();
                  setMessage({ type: '', content: '' });
                }}
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFacility;