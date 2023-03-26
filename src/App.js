import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {
    const [them, setThem] = useState(false);

    function handleThemChange(){
        setThem((prevThem) => prevThem ? false : true);
    }

    return (
        <div className={them ? "dark" : "light"}>
            <Nav handleThem={handleThemChange} them={them}/>
            <Main />
        </div>
    )
};
