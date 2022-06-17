import React, {useState, useEffect} from 'react';
//PLAN
//create function CatButton({handleClick}){
// logic creating button 
// event listener handleClick which is a prop 
// async (await) fetch request to cat api 
//return <button/> 
//display image may need to be a seperate component
//}


function CatButton() {
    const [cats, setCats]= useState([{
        "breeds": [
          
        ],
        "id": "MTQ5NjUwNQ",
        "url": "https://cdn2.thecatapi.com/images/MTQ5NjUwNQ.jpg",
        "width": 4272,
        "height": 2848
      }]);
    
    useEffect(function () {
        const fetchData = async function() {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
            const data = await response.json();
            setCats(data);
        }
            
        fetchData()
        }, []);//if no dependency OR dependency [cats] app loads without errors but is stuck in infite loop of getting cats
      

    let exists = false;
    if (cats[0].url) {
        exists = true;
    }

    return (
        <>
            {exists && <img src={cats[0].url} alt="MEOW"></img>}

        </>
        );

}

export default CatButton;
