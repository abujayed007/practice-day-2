import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData()
    const {id, name, price, details, taste, image_url} = product 
    
    const handleUpdate = async (e) =>{
        e.preventDefault()
        const form = e.target
        const id = form.id.value
        const name = form.name.value
        const price = form.price.value
        const details = form.details.value
        const taste = form.taste.value
        const image_url = form.image_url.value

        const productInfo = {
            id, name, price, details, taste, image_url
        }

       await Swal.fire({
            title: "Are you sure?",
            text: "You Update This Item",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Post"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/cola/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(productInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                Swal.fire({
                    title: "Updated",
                    text: "Your file has been Updated",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="shadow-2xl p-10">
            <h2 className="text-5xl font-bold text-center">Update Item</h2>
            <form onSubmit={handleUpdate}>
                <div className="flex flex-wrap justify-center space-x-2">
                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Id</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={id} readOnly className="input input-bordered w-full" type="text" name="id" placeholder="Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={name} className="input input-bordered w-full" type="text" name="name" placeholder="Name" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={price} className="input input-bordered w-full" type="text" name="price" placeholder="Price" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={taste} className="input input-bordered w-full" type="text" name="taste" placeholder="Taste" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={details} className="input input-bordered w-full" type="text" name="details" placeholder="Details" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 sm:w-full">
                        <label className='label'>
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <label className="label-group">
                            <input defaultValue={image_url} className="input input-bordered w-full" type="text" name="image_url" placeholder="Phoyto URL" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center">
                    <input type="submit" className="btn   bg-[#D2B48C] w-1/2 mt-4 text-xl text-white font-semibold" value="Update Item" />
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;