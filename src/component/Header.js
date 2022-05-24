import React,  { useState,useEffect } from 'react'
import './Header.css'
const Header= () => {

  const [city,setCity]=useState(null);
  const [search, setSearch]= useState("Mumbai")

  
  useEffect(() => {
      
      

    const fetchApi = async ()=>{
        
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dc7d59b7fee31c3690961b0783342e99`

        const response= await fetch(url);

        // console.log(response)
        // we have to convert this data in jason formate 

        const resJson = await response.json();
        console.log(resJson);
        

        setCity(resJson.main)

        // .main isliye kiya because we want to take only this part of data from our api 

    }

    fetchApi();
  
})

  return (
    <div className='headerContainer'>
    
    <div className='inputData'>
    
    <input type='search' className='inputField'  onChange={(event)=>{setSearch(event.target.value)}}/><button className='btn-search' >search</button>
    </div>
    
    {!city ?(
      <p> No Data Found</p>
    ):(
      <div className='mainContainer'>
      <h1 className='place'>{search}</h1>
      
      <h2 className='temprature'>{city.temp} degree celcius</h2>
      
      <h3 className='temperatureVariation'>Min : {city.temp_min} | Max :{city.temp_max}</h3>
      </div>
    )
    
    }

   

    </div>
  )
}

export default Header;