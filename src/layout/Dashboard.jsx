import { FaCalendar, FaHome, FaShoppingCart, FaUser, FaUtensilSpoon, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to have dynamic admin based on data 
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?

                            <>
                                <li><Link to='/dashboard/home'><FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to='/dashboard/addItem'><FaUtensilSpoon></FaUtensilSpoon> Add An Items</Link></li>
                                <li>
                                    <Link to='/dashboard/manageitems'><FaShoppingCart></FaShoppingCart> Manage Items
                                    </Link>

                                </li>
                                <li><Link><FaCalendar></FaCalendar> Manage Bookings</Link></li>
                                <li><Link to='/dashboard/allUsers'><FaUser></FaUser> Manage Users</Link></li>

                            </>

                            :

                            <>

                                <li><Link to='/dashboard/home'><FaHome></FaHome> User Home</Link></li>
                                <li><Link to='/dashboard/history'><FaWallet></FaWallet> Payment History</Link></li>
                                <li>
                                    <Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                        <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                    </Link>

                                </li>
                                <li><Link><FaCalendar></FaCalendar> Reservation</Link></li>

                            </>
                    }

                    <div className="divider"></div>
                    <li><Link to='/'><FaHome></FaHome> Home</Link></li>
                    <li><Link to='/menu'>Our Menu</Link></li>
                    <li><Link> Shop</Link></li>
                    <li><Link> Contact</Link></li>

                </ul>


            </div>
        </div>
    );
};

export default Dashboard;