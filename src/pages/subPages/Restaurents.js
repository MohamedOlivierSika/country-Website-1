import React from 'react';
import Header from '../../components/Header';
import box from '../../images/icons/box.png';
import { useParams } from 'react-router-dom';

function Restaurents() {
    let { country } = useParams();

    // Define the number of restaurants or use an array with restaurant details
    const numberOfRestaurants = 18;

    // Create an array of restaurant details (you can expand this with real data)
    const restaurants = Array.from({ length: numberOfRestaurants }, (_, index) => ({
        name: `Restaurant Name ${index + 1}`,
        description: `Experience [cuisine type] at its finest in the heart of [location]. Our [unique feature, e.g., "farm-to-table approach" or "authentic recipes"] offers a diverse menu`,
        priceRange: '$ - $$',
    }));

    return (
        <div>
            <div className='headerBox backgroundActivityImage'>
                <Header />
                <h3 className='activityCountryTitle'>{country}</h3>
            </div>
            <div className='boxesContainer'>
                {restaurants.map((restaurant, index) => (
                    <li key={index}>
                        <img src={box} alt={`Icon for ${restaurant.name}`} />
                        <h4>{restaurant.name}</h4>
                        <p>
                            {restaurant.description}
                            <br />
                            Price range: {restaurant.priceRange}
                        </p>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default Restaurents;
