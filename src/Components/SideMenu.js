import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../Styles/SideMenu.css'
import auth from '../Images/Auth.jpg'
import logo from '../Images/log.png'
import { Image } from "@chakra-ui/react";


const SideMenu = () => {

    const [activeItem, setActiveItem] = useState("");

    function handleItemClick(item) {
        setActiveItem(item);
    }

    return (
        <>
            <div className="sidebar">
                <div className="container">
                    <div className="left">
                        <Image src={logo} width='50px' height='50px' />
                    </div>
                    <div className="right">
                        basys.ai
                    </div>
                </div>

                <Link to="/dragdrop" className={activeItem === "priorauth" ? "active" : ""} onClick={() => handleItemClick("priorauth")}>
                    <Image src={auth} /> <div>Prior Authorization</div>

                </Link>
            </div>
        </>
    )
}

export default SideMenu
