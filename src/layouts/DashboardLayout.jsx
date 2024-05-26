import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-start m-2">
                <label htmlFor="my-drawer-2" className="btn text-black text-2xl drawer-button lg:hidden"><IoReorderThreeOutline /></label>
                <div className="flex mx-auto">
                
                <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li className="text-lg font-bold text-blue-500"><Link to='/dashboard/allproducts'>All Products</Link></li>
                    <li className="text-lg font-bold text-blue-500"><Link to='/dashboard/addproduct'>Add Products</Link></li>
                    <li className="text-lg font-bold text-blue-500"><Link to='/'>Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;