import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){
                const imgURL=imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL }
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data =>{
                    console.log('after posting new menu item', data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Item Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            }
        })
    };
    console.log(errors);
    console.log(img_hosting_token);

    return (
        <div className='w-full px-10'>
            <SectionTitle subHeading="What's new" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Receipe Name*</span>
                    </label>
                    <input type="text" placeholder="Receipe Name"
                    {...register("name", {required: true, maxLength: 80})}
                    className="input input-bordered w-full " />
                </div>
                <div className='flex'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select defaultValue='Pick One' {...register("category", { required: true })} className="select select-bordered">
                        <option disabled>Pick One</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
                    </select>
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" placeholder="Type here" {...register("price", {required: true, maxLength: 80})} className="input input-bordered w-full " />
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Receipe Details</span>
                    </label>
                    <textarea {...register("recipe", {required: true, maxLength: 80})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                </div>
                <button className="btn btn-sm mt-4">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;