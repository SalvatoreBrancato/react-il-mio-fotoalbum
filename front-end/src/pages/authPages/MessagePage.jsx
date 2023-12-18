import axios from '../../axiosClient';
import {useState, useEffect} from 'react';

export default function MessagePage(){

    const [message, setMessage]=useState([]);


    function apiMessage(){
        axios.get('http://localhost:3000/contact')
        .then(data => {
            console.log(data);
            setMessage(data)
        })
    }

    useEffect(apiMessage, []);

    return(
        <>
            {message.map((elem)=>{
                <h1>{elem.email}</h1>
            })}
        </>
    )
}