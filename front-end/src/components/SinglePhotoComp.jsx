import { useState, useEffect } from "react";
import { useNavigate ,useParams } from "react-router-dom";

export default function SinglePhotoComp(){

    const {id} = useParams();

    const[singlePhoto, setSinglePhoto]= useState([]);

    //Fetching dei dati
    function apiSinglePhoto(){
        fetch(`http://localhost:3000/image/${id}`)
        .then((res)=>res.json())
        .then(setSinglePhoto);
    }

    //solo al primo rendering
    useEffect(apiSinglePhoto, [])

    const navigate = useNavigate();

    return(
        <>
            <div key={singlePhoto.id} className="w-1/6 h-4/6 border border-indigo-500 m-2">
                <img src={`http://localhost:3000/${singlePhoto.image}`} className="w-full h-3/4" alt="" />
                <h2 className="capitalize" key={singlePhoto.id}>{singlePhoto.title}</h2>
                <p>{singlePhoto.description}</p>
            </div>
            <button onClick={()=>navigate(-1)}> 🔙Torna alla pagina precedente</button>
        </>
    )
}