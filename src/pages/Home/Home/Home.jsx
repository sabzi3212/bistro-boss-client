import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopulaeMenu from '../PopularMenu/PopulaeMenu';
import ChefRecommendation from '../ChefRecommendation/ChefRecommendation';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulaeMenu></PopulaeMenu>
            <ChefRecommendation></ChefRecommendation>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;