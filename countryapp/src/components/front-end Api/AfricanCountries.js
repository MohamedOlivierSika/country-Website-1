document.getElementById('menuClick').addEventListener('click', function(){

    const countryListUrl = 'https://restcountries.com/v3.1/all'; // get the api 

    // next code fetch the date from the api
    fetch(countryListUrl)
    .then(response => {
        if (!response.ok) {
            throw new console.error('Network not responding');
          }
          return response.json();
    })
    //this code for debugging 
    .then(data =>{
        console.log(data);
        displayRegions(data);
    })
    .catch(error => {
        console.error("No data was found your fault", error);
    });

});

function displayRegions(data){
    const countryDiv = document.getElementById('couintryResult');
    let countryListHTML = '<ul>';

    data.forEach(country => {
        countryListHTML += `<li>${country.name.common}</li>`;
    });

    countryListHTML += '</ul>';
    countryDiv.innerHTML = countryListHTML; // Display the list
}

/*
.then(data => {
    // Sort the data alphabetically by country name
    const sortedData = data.sort((a, b) => {
      // Access the country name property correctly
      const nameA = a.name.common.toUpperCase(); // Convert to uppercase for case-insensitive sorting
      const nameB = b.name.common.toUpperCase(); // Convert to uppercase for case-insensitive sorting
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    setCountries(sortedData);
  }) */