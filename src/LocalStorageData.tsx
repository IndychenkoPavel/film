// import React from 'react';
import React, { useState, useEffect } from 'react';

interface FilmsProps {
  item: object[];
  // item: {
  //   name: string;
  // }[];
}

export default function LocalStorageData() {

    // const [item, setItem] = useState('');
    const [items, getLocalStorage] = useState([]);

    React.useEffect( () => {
      let dataLS = JSON.parse(localStorage.getItem('LSData'));
      getLocalStorage(dataLS);
    }, [items]);

    function setLocalStorage() {
        films.localStorage.setItem('LSData');
    }
    // function getLocalStorage() {
    //     const dataLS = localStorage.getItem('LSData');
    // }

    
    return (
        <div>
            <button onClick={setLocalStorage}>addLocalStorage</button>
            <button onClick={() => getLocalStorage ()}>getLocalStorage</button>
            <div className="div">
            </div>
        </div>
        
    ); 
}
