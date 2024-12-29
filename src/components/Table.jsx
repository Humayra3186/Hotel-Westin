import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { format } from "date-fns";
import { MdOutlineRateReview } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr"
import { RiDeleteBin2Line } from "react-icons/ri"; import DatePicker from 'react-datepicker';
;
import swal from 'sweetalert';


const Table = ({ book ,index}) => {

  const [startDate, setStartDate] = useState(book?.date);


  //handle update

  const handleUpdate = () => {
    const newDate = {startDate}
    console.log(newDate)
    axios.patch(`${import.meta.env.VITE_API_URL}/updateDate/${book?._id}` , newDate)
    .then(data => {

      console.log(data.data)
    
      if(data?.data?. modifiedCount >0 ){

    swal("Great","Successfully Updated!" , 'success');

  }
    })
   
  }

 
  return (

    <>
      <tr className='hover:bg-base-200'>
        <td className='w-[7rem] '> <img className='h-12  md:w-10 md:h-10 rounded-full' src={book.img} alt="" /></td>
        <td className='font-semibold text-[1rem]'>{book.name}</td>
        <td className='font-semibold text-[1rem]'>{book.price}$</td>
        <td className='font-semibold text-[1rem]'>{format(new Date(book.date), 'P')}</td>
        <td className='flex item-center justify-center gap-3'>
          <button className='text-white hover:text-lime-600 hover:bg-lime-100 bg-lime-600 px-5 py-2 text-[1.1rem]' ><MdOutlineRateReview></MdOutlineRateReview></button>
          <button onClick={() => document.getElementById(`my_modal_${index}`).showModal()} className=' px-5 py-2 hover:bg-slate-300 hover:text-black bg-black text-white text-[1.1rem]'><GrDocumentUpdate></GrDocumentUpdate></button>
         
          <button className='bg-[#d12d2d] hover:bg-red-300 hover:text-red-600 text-white px-5 py-2 text-[1.1rem]'><RiDeleteBin2Line></RiDeleteBin2Line></button>

        </td>
        <td>
          <dialog id={`my_modal_${index}`} className="modal">
                       <div className="modal-box h-[50vh]">
       
                         
       
      
                           <p className=' my-3 text-[#C4A484] font-bold text-[1.1rem]'>Update date:</p>
                           <br />
                           <DatePicker className='border-2 p-3 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
       
                          
       
                           <div className="modal-action">
                               <form method="dialog">
                                   {/* if there is a button in form, it will close the modal */}
                                   <button onClick={handleUpdate} className="btn-all px-4 py-2">Confirm</button>
                               </form>
                           </div>
                       </div>
                   </dialog>
       
        </td>



      </tr>

     

    </>















  );
};

export default Table;