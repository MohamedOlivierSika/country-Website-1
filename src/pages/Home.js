import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Africa from '../images/Titles/titleNoSpace.png';
import ContinentSelector from '../components/buttons/ContinentSelector';

function Continent() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual Pexels API key
                const response = await fetch('https://api.pexels.com/v1/search?query=africa&orientation=landscape&color=green', {
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

    return (
        <div
            className='backgroundHomeImage'
           /* style={{
                backgroundImage: image ? `url(${image.src.large})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}*/
        >
            <Header/>
            <img className='title' src={Africa} alt="Africa Title" />
          
        </div>
    );
}

export default Continent;
