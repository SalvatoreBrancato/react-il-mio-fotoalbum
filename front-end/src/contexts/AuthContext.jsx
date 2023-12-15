import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../axiosClient'

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();


    async function handleLogin(payload) {
        // Qui effettueremo la chiama API al server backend

        try{
            const {data} = await axios.post('/login', payload);
            setUser(data.user)
            setIsLoggedIn(true)
        }catch(error){
            throw new Error(error.response.data)
        }
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }

    const values = {
        isLoggedIn,
        user,
        handleLogin,
        handleLogout
    };


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }