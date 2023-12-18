import { useState, useEffect } from "react";
import { Navigate, useNavigate ,useParams } from "react-router-dom";
import axios from '../axiosClient'

export default function SinglePhotoComp(){

    const {id} = useParams();

    const[singlePhoto, setSinglePhoto]= useState([]);

    //Fetching dei dati
    function apiSinglePhoto(){
        fetch(`http://localhost:3000/image/${id}`)
        .then((res)=>res.json())
        .then(setSinglePhoto);
    }

    function deletePhoto(){
        axios.delete(`/image/${id}`)
        .then(data => {
            console.log(data);
            navigate('/admin')
        })
        .catch((error) => {
            console.error('Error:', error);
        })
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                    focus:outline-none focus:shadow-outline" onClick={()=>navigate(-1)}> 🔙Torna alla pagina precedente</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded
                    focus:outline-none focus:shadow-outline mx-5" onClick={()=>{deletePhoto()}}>Elimina foto</button>
        </>
    )
}