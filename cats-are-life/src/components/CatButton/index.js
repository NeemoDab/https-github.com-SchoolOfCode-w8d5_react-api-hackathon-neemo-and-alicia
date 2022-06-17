import React, {useState} from 'react';
//PLAN
//create function CatButton({handleClick}){
// logic creating button 
// event listener handleClick which is a prop 
// async (await) fetch request to cat api 
//return <button/> 
//display image may need to be a seperate component
//}


function CatDisplay() {
    const [cats, setCats]= useState([{
        "breeds": [
          
        ],
        "id": "MTQ5NjUwNQ",
        "url": "https://cdn2.thecatapi.com/images/MTQ5NjUwNQ.jpg",
        "width": 4272,
        "height": 2848
      }]);
    
    const fetchData = async function() {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
        const data = await response.json();
        setCats(data[0].url);
        }
            
        fetchData()

    return (
        <>
            <img src={cats[0].url} alt="MEOW"></img>
        </>
        );

}

export default CatDisplay;
