import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const handleAddToCart = item => {
        console.log('added:', item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email:user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res =>res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); //refetch cart to update the number of items in the cart
                    Swal.fire({
                        icon: 'success',
                        title: 'successfully added to cart'
                      })
                      
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}});
                }
              })
              
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>{handleAddToCart(item)}} className="btn btn-outline border-0 morder-b-4 mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;