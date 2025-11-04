const url = `https://api.openweathermap.org/data/2.5/`
const key = `165ea30cd77ebe38457b894cb0981cd2`

const getResult = async (cityName) => {
    try {
        const response = await fetch(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=eng`);
        const result = await response.json();
        displayResult(result);


    } catch (error) {
          console.error(error)
          
    }
};






const displayResult = (result) => {
  document.querySelector(".city").innerText = `${result.name}, ${result.sys.country}`;
  document.querySelector(".temp").innerText = `${Math.round(result.main.temp)}°C`;
  document.querySelector(".desc").innerText = result.weather[0].description;
  document.querySelector(".minmax").innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;
   const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-GB', options); 
  
  document.getElementById("date").innerText = formattedDate;

}

const setQuery = (e) => {
    if(e.keyCode === 13) getResult(searchBar.value);
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);