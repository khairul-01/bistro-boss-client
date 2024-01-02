import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const {name, category, recipe, price, _id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async data => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if (res.data.success) {
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            console.log(menuItem);
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading='Refresh info'></SectionTitle>
            <div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" defaultValue={name} {...register("name", { required: true })}
                            placeholder="Recipe Name"
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soups">Soups</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input type="text" defaultValue={price} {...register("price", { required: true })}
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register('recipe', { required: true })} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <div>
                        <input type="file" {...register('image', { required: true })} className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">Update menu Item <FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;