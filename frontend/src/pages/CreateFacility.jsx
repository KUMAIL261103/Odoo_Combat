
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AdminNavbar from "../components/AdminNavbar";

// Define Zod schema
const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  location: z.string().nonempty({ message: "Location is required" }),
  image: z.string().nonempty({ message: "Image URL is required" }),
  amenities: z.string().nonempty({ message: "Amenities are required" }),
  price: z.string().nonempty({ message: "Price is required" }),
});

const CreateFacility = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });
    


  const onSubmit = async(data) => {
    
        const backendapi = import.meta.env.VITE_API_URL || "http://localhost:3000";
        await fetch(`${backendapi}/api/facilities/createFacility`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          reset();
        })
        .catch((error) => {
          console.error("Error creating facility:", error);
        });

  };

  return (
    <div className="bg-slate-950 w-screen h-screen">
      <AdminNavbar />
      <div className="flex justify-center items-center">
        <div className="bg-gray-500 p-4 rounded-lg w-96">
          <h1 className="text-2xl font-bold text-center">Create Facility</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2">
              <label htmlFor="name" className="text-sm font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
                placeholder="Name"
                {...register("name")}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>
            <div className="mt-2">
              <label htmlFor="location" className="text-sm font-semibold">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
                placeholder="Location"
                {...register("location")}
              />
              {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
            </div>
            <div className="mt-2">
              <label htmlFor="image" className="text-sm font-semibold">Image(URL)</label>
              <input
                type="text"
                id="image"
                name="image"
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
                placeholder="Image"
                {...register("image")}
              />
              {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
            </div>
            <div className="mt-2">
              <label htmlFor="amenities" className="text-sm font-semibold">Amenities</label>
              <input
                type="text"
                id="amenities"
                name="amenities"
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
                placeholder="Amenities"
                {...register("amenities")}
              />
              {errors.amenities && <p className="text-red-500 text-xs">{errors.amenities.message}</p>}
            </div>
            <div className="mt-2">
              <label htmlFor="price" className="text-sm font-semibold">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-0"
                placeholder="Price"
                {...register("price")}
              />
              {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
            </div>
            <div className="mt-2 flex items-center justify-center gap-4">
              <button type="submit" className="bg-light-green text-black py-2 px-4 rounded">Create</button>
              <button type="button" className="bg-red-500 text-white py-2 px-4 rounded">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFacility;
