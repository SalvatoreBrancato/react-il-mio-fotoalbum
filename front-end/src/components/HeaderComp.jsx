import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function HeaderComp(){

    const { isLoggedIn } = useAuth();

    return(
        <header className="w-screen h-16 bg-black/25 flex items-center justify-around">
            <div>
                <h1 className="italic font-mono text-5xl">Le nostre foto</h1>
            </div>
            <div className="flex justify-end w-50">
                <Link to="/">Home</Link>
                <Link className="mx-5" to="/photo">Foto</Link>
                <Link to="/contact">Contatti</Link>
                <Link className="ms-5" to={isLoggedIn ? "/admin" : "/login"}>Area personale</Link>
            </div>
        </header>
    );
}