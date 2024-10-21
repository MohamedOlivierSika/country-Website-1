import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AfricanCountry(){
    let { country } = useParams();
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual Pexels API key
                const response = await fetch('https://api.pexels.com/v1/search?query=africa&orientation=landscape', {
                    headers: {
                        'Authorization': 'VkqX5ItLfv557yvRlYkJS9c3g4AzRDHnp39Luc5BGhZvAC7QIEn67s1A'
                    }
                });
                const data = await response.json();
                if (data.photos.length > 0) {
                    // Select a random image from the fetched list
                    const randomIndex = Math.floor(Math.random() * data.photos.length);
                    setImage(data.photos[randomIndex]);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchRandomImage();
    }, []);
    
return(<div className='backgroundCountryImage'     style={{
    backgroundImage: image ? `url(${image.src.original})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}}>
     <Header/>
    <h1 className='countryTitle'>{country}</h1>
    <div className='buttonList'>
        <li><Link to={`/${country}/restaurent`}> <button>Restaurent </button></Link></li>
        <li><button>Activity</button></li>
        <li><button>Hotels</button></li>
    </div>
</div>




)}

export default AfricanCountry


