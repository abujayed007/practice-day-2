import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductCard = ({ drink, onDelete }) => {

    const { id, name, price, details, taste, image_url } = drink;

    const handleDelete =async () => {
       await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/cola/${id}`, {
                    method: 'DELETE',
                }).then((res) => {
                    console.log(res)

                    if (res.status === 200) {

                        onDelete(id);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })

            }
        });



        //   console.log(data);

    }

    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className="h-[350px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex gap-x-3">
                    <p className="text-lg font-semibold">Price : ${price}</p>
                    <p className="text-lg font-semibold">Taste : {taste}</p>
                </div>
                <div className="card-actions justify-around">
                    <button className="btn text-white font-semibold bg-[#0369AA]">Details</button>
                    <Link className="btn text-white font-semibold bg-[#02943C]" to={`/dashboard/update/${id}`}>Edit</Link>
                    <button onClick={handleDelete} className="btn text-white font-semibold bg-[#EF3B44]">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;