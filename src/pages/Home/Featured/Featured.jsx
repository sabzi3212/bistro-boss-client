import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item text-white font-bold pt-8 my-20 bg-fixed'>
            <SectionTitle heading="check it out" subHeading='featured Item'></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-10 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2023</p>
                    <p className='uppercase'>Where can I get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, corrupti nesciunt reiciendis tenetur sequi ad culpa soluta reprehenderit? Veniam, cupiditate!</p>
                    <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;