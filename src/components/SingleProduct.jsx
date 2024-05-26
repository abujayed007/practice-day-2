

const SigleProduct = ({product}) => {
    const {id, name, price, details, taste, image_url} = product 
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[350px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex gap-x-3">
                <p className="text-lg font-semibold">Price : ${price}</p>
                <p className="text-lg font-semibold">Taste : {taste}</p>
                </div>
                <div className="card-actions justify-around">
                    <button className="btn text-white font-semibold bg-[#0369AA]">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SigleProduct;