import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { format, subDays } from "date-fns";
import { MdOutlineRateReview } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr"
import { RiDeleteBin2Line } from "react-icons/ri"; import DatePicker from 'react-datepicker';
;
import swal from 'sweetalert';
import { compareDesc } from "date-fns";

import ReactStars from 'react-stars'




const Table = ({ book, index, fetchAllBooks }) => {

  const [startDate, setStartDate] = useState(book?.date);

  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)

  const [rating , setRating] =useState("")



  const [date, setDate] = useState(Date.now())

  //handle update

  const handleUpdate = () => {

    setLoading(true)
    const newDate = { startDate }
    axios.patch(`${import.meta.env.VITE_API_URL}/updateDate/${book?._id}`, newDate)
      .then(data => {
        fetchAllBooks()
        setLoading(false)



        if (data?.data?.modifiedCount > 0) {


          swal("Great", "Successfully Updated!", 'success');


        }
      })

  }

  const data = { id: book.id, status: "available" }

  // cancel date 


  const handleCancel = () => {

    const lastDate = subDays(new Date(book.date), 1)
    const result = compareDesc(new Date(lastDate), new Date())


    if (result === 1) {
      swal("Sorry!", "You can't cancel now!", "error");
    }

    axios.post(`${import.meta.env.VITE_API_URL}/cancel/${book?._id}`, data)

      .then(data => {
       
        fetchAllBooks()
      })



    

  }


  //rating

  const ratingChanged = (newRating) => {
    setRating(newRating)
  }


  // review


  const handleReview = e =>{
    e.preventDefault()
    
    const id = book.id
    const name = user.displayName
    const photo = user.photoURL
    const comment = e.target.comment.value
    const rate = rating
    const time = date

    const review = {
      id,name,photo,comment,rate,time
    }


    axios.post(`${import.meta.env.VITE_API_URL}/review`, review)
    .then(data=> console.log(data.data))
   

   

    document.getElementById(`two_${index}`).close()
  }


  return (

    <>
      <tr className='hover:bg-base-200'>
        <td className='w-[7rem] '> <img className='h-12  md:w-10 md:h-10 rounded-full' src={book.img} alt="" /></td>
        <td className='font-semibold text-[1rem]'>{book.name}</td>
        <td className='font-semibold text-[1rem]'>{book.price}$</td>
        <td className='font-semibold text-[1rem]'>{format(new Date(book.date), 'P')}</td>
        <td className='flex item-center justify-center gap-3'>
          <button onClick={() => document.getElementById(`two_${index}`).showModal()} className='text-white hover:text-lime-600 hover:bg-lime-100 bg-lime-600 px-5 py-2 text-[1.1rem]' ><MdOutlineRateReview></MdOutlineRateReview></button>
          <button onClick={() => document.getElementById(`my_modal_${index}`).showModal()} className=' px-5 py-2 hover:bg-slate-300 hover:text-black bg-black text-white text-[1.1rem]'><GrDocumentUpdate></GrDocumentUpdate></button>

          <button onClick={handleCancel} className='bg-[#d12d2d] hover:bg-red-300 hover:text-red-600 text-white px-5 py-2 text-[1.1rem]'><RiDeleteBin2Line></RiDeleteBin2Line></button>

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


        {/* review */}

        <td>
          <dialog id={`two_${index}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg flex items-center justify-center gap-2 text-[2rem] text-[#C4A484]">Post a Review <MdOutlineRateReview></MdOutlineRateReview></h3>
              <form onSubmit={handleReview} className="card-body">
                <div className="form-control">
                  <label className="label font-semibold">
                    <span className="label-text">Name : </span>
                  </label>
                  <input readOnly type="text" value={user.displayName} className="input input-bordered mb-3" required />
                </div>
                <div className="form-control">
                  <label className="label font-semibold">
                    <span className="label-text">Comment :</span>
                  </label>
                  <textarea className='border-2 mb-3 rounded-md' name="comment" id=""></textarea>


                  <label className="label font-semibold">
                    <span className="label-text mb-3">Rating :</span>
                  </label>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'} />

                 
                </div>
                <button className="btn">Confirm</button>
              </form>
              <div className="modal-action">
               
              </div>
            </div>
          </dialog>

        </td>



      </tr>

    </>


  );
};

export default Table;