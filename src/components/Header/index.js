import React from 'react'
import '../Header/index.scss'
import '../Header/media.scss'
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
function Header() {
    const [open, setOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header>
            <div className={'container-header'}>
                <div className={openMenu ? 'box-header isOpened' : 'box-header'}>
                    <div className={'logo-header'}>
                        <h1 className={'logo-text'}>Best to Fly | BTF</h1>
                    </div>
                    <div className={'burger-header'}>
                        <button className={'burger-button'} onClick={() => setOpen(!open) & setOpenMenu(!openMenu)}><i className={!open ? `fa-solid fa-bars` : `fa-solid fa-xmark`}></i></button>
                    </div>
                    <div className={'links-header'}>
                        <Link to={"/"} className={'nav-links'}>Главная</Link>
                        <Link to={"/tours"} className={'nav-links'}>Горящие туры</Link>
                        <Link to={"/company"} className={'nav-links'}>О нас</Link>
                        <Link to={"/contacts"} className={'nav-links'}>Контакты</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header