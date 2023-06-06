import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { data } from 'autoprefixer';
import ChefRecomCard from './ChefRecomCard';

const ChefRecommendation = () => {
    const [receipe, setReceipe] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const chefRecom = data.filter(item =>item.category === 'salad');
            setReceipe(chefRecom);
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading='Should Try'
            subHeading='Chef Recommends'></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    receipe.map(item => <ChefRecomCard key={item._id} item={item}></ChefRecomCard>)
                }
            </div>

        </section>
    );
};

export default ChefRecommendation;