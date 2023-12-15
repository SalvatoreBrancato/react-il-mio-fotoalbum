import { Link, NavLink } from "react-router-dom";

export default function HeaderComp(){
    return(
        <header className="w-screen h-16 bg-black/25 flex items-center justify-around">
            <div>
                <h1 className="italic font-mono text-5xl">Le nostre foto</h1>
            </div>
            <div className="flex justify-end w-50">
                <Link to="/">Home</Link>
                <Link className="mx-5" to="/photo">Foto</Link>
                <Link to="/admin/create">Inserisci foto</Link>
                <Link className="mx-5" to="/admin/update">Modifica foto</Link>
            </div>
        </header>
    );
}