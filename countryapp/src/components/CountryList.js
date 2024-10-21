import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/header.css';
import Country from '../pages/subPages/AfricanCountry';
import Hamburger from '../images/icons/menuThings/Menu.png'
import SortDown from '../images/icons/menuThings/SortDown.png'
import Hide from '../images/icons/menuThings/hideItems.png'
import { Link } from 'react-router-dom';

function CountryList({menu, menuClick}){

    const [groupedCountries, setGroupedCountries] = useState({});

    useEffect(() => {
        const countryListUrl = 'https://restcountries.com/v3.1/region/africa';

        fetch(countryListUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Sort the data alphabetically by country name
                const sortedData = data.sort((a, b) => {
                    const nameA = a.name.common.toUpperCase();
                    const nameB = b.name.common.toUpperCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                });

                // Group the sorted data by the first letter
                const grouped = sortedData.reduce((acc, country) => {
                    const countryName = country.name.common;
                    const firstLetter = countryName[0].toLowerCase();

                    if (!acc[firstLetter]) {
                        acc[firstLetter] = [];
                    }

                    acc[firstLetter].push(countryName);

                    return acc;
                }, {});

                setGroupedCountries(grouped);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);


    
    return(<div className={`countryListContainer ${menu}`}>
        <div className='countryListTitle'>
            <img onClick={() => {menuClick();}} className='menuIconList'src={Hamburger} />
            <h1>Country List</h1>
        </div>
        <div className='countryList'>
            <ol>
            {Object.keys(groupedCountries).map(letter => (
                <div  key={letter}>
                    <div className='letterCat'><span className='bigSpan'>{letter.toUpperCase()}</span></div>
                    <ol>
                        {groupedCountries[letter].map(country => (
                            <li key={country}>
                               <Link to={`/${country}`}> <span className='smallSpan'>{country}</span></Link>
                             
                            </li>
                        ))}
                    </ol>
                </div>
            ))}

                
            
          
            </ol>
             <div>
    
        </div>
        </div>
       
       
    </div>)}

export default CountryList


