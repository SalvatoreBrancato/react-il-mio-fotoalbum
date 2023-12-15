import { useState } from "react"

export default function FormComp() {

    const initialFormData = {
        email: '',
        message: ''
    }

    const [formData, setFormData] = useState(initialFormData);

    function createFormData(newValue, fieldName) {
        const newFormData = { ...formData }

        //aggiorno la chiave e il valore
        newFormData[fieldName] = newValue

        //passo l'ogetto mmodeificato e setFormData
        setFormData(newFormData)

    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:3000/contact/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            //svuota i campi del form
            setTimeout(() => {
                setFormData(initialFormData)
            }, 1000);
    }

    return (
        <>
            <div className="container mx-auto px-4">
                {/* form di login */}
                <div className="flex justify-center items-center">
                    <div className="w-full max-w-md">

                        <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
                            onSubmit={handleSubmit}>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Inserisci la tua email per essere ricontattato
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Email"
                                    value={formData.email} onChange={(e) => createFormData(e.target.value, 'email')} />
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Messaggio
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text"
                                    value={formData.message} onChange={(e) => createFormData(e.target.value, 'message')} />
                                {/* <p className="text-xs italic">Please choose a password.</p> */}
                            </div>
                            <button className='bg-blue-500 p-2 rounded text-white mb-2'>Invia</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}


