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
    const [cats, setCats]= useState([]);
    
    useEffect(function () {
        const fetchData = async function() {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
            const data = await response.json();
            setCats(data);
        }
            
        fetchData()
        },[]);// do we need a dependency leave empty and add brycen fix
        // try with cats and brycen fix after lunch

    return (
        <>
            <img src={cats[0].url}></img>
            <button className="cat-button">GET ME A CAT FOR MY LIFE</button>
        </>
        );

}

export default CatButton;
