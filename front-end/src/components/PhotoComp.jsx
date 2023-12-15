import {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function PhotoComp(){

    const [photo, setPhoto]=useState([]);

    //Fetching dei dati
    function apiPhoto(){
        fetch("http://localhost:3000/image")
        .then((res) => res.json())
        .then(setPhoto);
    }

    //solo al primo rendering
    useEffect(apiPhoto, []);

    return(
        <>
           { 
                photo.map((elem)=>{
                    return(
                        <div key={elem.id} className="w-1/6 h-96 border border-indigo-500 m-2">
                            <Link to={`/photo/${elem.id}`}>
                                <img src={`http://localhost:3000/${elem.image}`} className="w-full h-3/4" alt="" />
                                <h2 className="capitalize">{elem.title}</h2>
                                <p>{elem.description}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}