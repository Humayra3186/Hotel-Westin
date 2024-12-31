import React, { useEffect } from 'react';
import Banner from '../components/Banner/swiper/Banner';
import Top from '../components/Top';
import LocationMap from '../components/LocationMap';
import Food from '../components/Food';
import Facilites from '../components/Facilites';
import Review from '../components/review/Review';



const Home = () => {

    const handleModal = () => {
        document.getElementById('my_modal_3').showModal()
    }

    useEffect(() => {
        handleModal()
    }, [])


    return (
        <div>
            <Banner></Banner>
            <LocationMap></LocationMap>
            <Top></Top>
            <Review></Review>
            <Facilites></Facilites>
            <Food></Food>

            <dialog id="my_modal_3" className="modal">


                <div className="modal-box w-[70%] bg-no-repeat bg-cover bg-center flex justify-center items-center p-5  md:w-[50%] backdrop-blur-lg lg:w-[30%] h-[70vh]" style={{
                    backgroundImage: "url(https://q-xx.bstatic.com/xdata/images/hotel/max500/357643150.jpg?k=b6387bf1563bed453376ec89f2dacb0a53bbf4ece194fa4caf6db7a878466b72&o=)",
                }}>

                    <div className='text-center'>
                    
                    <p className="font-bold play text-[3rem] text-[#ec3322] " >50% Off</p> 
                    <h3 className="font-bold play text-[1.6rem] text-[#fffeff] ">Luxury Room </h3>
                    <p className="py-4 font-bold text-white">Lets Get Discount On This Gorgeous Room</p>
                    </div>



                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                </div>
            </dialog>

        </div>
    );
};

export default Home;