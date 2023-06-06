import { Helmet } from 'react-helmet-async';
import Cover from '../../pages/Shared/Cover/Cover';
import menuImg from '../../assets/menu/pizza-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/soup-bg.jpg';
import soupImg from '../../assets/menu/salad-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Todays Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert section */}

            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>

            {/* Pizza Section */}

            <MenuCategory items={pizza} title="pizzas" img={pizzaImg}></MenuCategory>

            {/* Salad section */}

            <MenuCategory items={salad} title="salads" img={saladImg}></MenuCategory>
            {/* Soup section */}

            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;