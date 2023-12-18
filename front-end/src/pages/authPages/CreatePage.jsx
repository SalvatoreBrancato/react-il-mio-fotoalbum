import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from '../../axiosClient'

export default function CreatePage() {

    const initialFormData = {
        title: "",
        description: "",
        image: "",
        visibility: true,
        categories: []
    }

    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState();

    function createFormData(newValue, fieldName) {
        //clono l'ogetto e uso lo spread
        const newFormData = { ...formData };

        //aggiorno la chiave e il valore
        newFormData[fieldName] = newValue

        //passi l'ogetto modificato a setFormData
        setFormData(newFormData)
    }

    function handleSubmit(e) {
        e.preventDefault()

        axios.post("/image", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
            .then(data => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        //resetto form
        setFormData(initialFormData)

    }

    return (
        <>
            <form className='flex justify-around flex-col w-2/4 h-2/6 mx-auto' onSubmit={handleSubmit}>
                <input className='border-solid border-2 border-black rounded mb-1' type="text" name="title" placeholder="inserisci il titolo" value={formData.title} onChange={(e) => createFormData(e.target.value, 'title')} />
                <input className='border-solid border-2 border-black rounded mb-1' type="text" name="description" placeholder='inserisci descrizione' value={formData.description} onChange={(e) => createFormData(e.target.value, 'description')} />
                <input className='border-solid border-2 border-black rounded mb-1' type="file" name="image" placeholder="inserisci la foto" accept=".jpg, .jpeg, .png" onChange={(e) => createFormData(e.target.files[0], 'image')} />
                {/* <div className='flex justify-start items-center mb-2'>
                            <input name='published' cheked={formData.published} type="checkbox" onChange={(e) => createFormData(e.target.checked, 'published')} /><span>Published</span>
                        </div> */}
                <button className='bg-blue-500 p-2 rounded text-white mb-2'>Aggiungi</button>
            </form>
        </>
    )
}