import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function HeaderComp(){

    const { handleLogout } = useAuth();

    return(
        <header className="w-screen h-16 bg-black/25 flex items-center justify-around">
            <div>
                <h1 className="italic font-mono text-5xl">Le nostre foto</h1>
            </div>
            <div className="flex justify-end w-50">
                <Link  to="/admin">Dashboard</Link>
                <Link className="mx-5" to="/admin/create">Inserisci foto</Link>
                <Link className="me-5" to="/admin/message">Messaggi</Link>
                <button onClick={()=>handleLogout()}>Logout</button>
            </div>
        </header>
    );
}