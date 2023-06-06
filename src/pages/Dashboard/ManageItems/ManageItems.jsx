import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res =>{
                console.log('deleted res', res.data);
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                }
            })

            }
          })
    }
    return (
        <div className='w-full'>
            <SectionTitle heading='Manage All Items' subHeading='Hurry Up'></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Category</th>
        <th>Price</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
        {
            menu.map((item, index) => <tr key={item._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.category}
                  <br/>
                </td>
                <td>$ {item?.price}</td>
                <td>
                <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg bg-red-400 text-white"><FaTrashAlt></FaTrashAlt></button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">update</button>
                </td>
              </tr>)
        }
      {/* row 1 */}
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default ManageItems;