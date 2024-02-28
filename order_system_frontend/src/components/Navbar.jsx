import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Social } from '../constant/social'
import order_system from '../assets/order_system.jpg'


function Navbar() {
    const authState = useSelector(state => state.auth);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const navbarContainer = `flex justify-around items-center gap-2 p-4 text-lime-500 text-lg bg-black w-full sticky top-0`;
    const logo = ` text-xl font-semibold text-yellow-400`;
    const logoImg = 'rounded-full'
    const logoWrapper = `flex justify-center items-center gap-2`
    const nav = `flex justify-center items-center list-none gap-4 md:gap-16 `;
    const navLink = `hover:text-lime-300 md:text-xl text-lg font-semibold`;

    return (
        <>
            <div className={navbarContainer}>
                <Link to={'/'}>
                    <div className={logoWrapper}>
                        <img
                            className={logoImg}
                            src={order_system}
                            alt="Logo"
                            height={'40px'}
                            width={'40px'}
                        />
                        <div className={logo}>{Social.title}</div>
                    </div>
                </Link>

                <div className={nav}>
                    {

                        <Link to={'/'}><li className={navLink} onClick={scrollToTop}> Home </li></Link>
                    }
                    {

                        <Link to={'/cart'}><li className={navLink} onClick={scrollToTop}>Cart </li></Link>
                    }
                    {
                        (!authState) &&
                        <Link to={'/login'}><li className={navLink} onClick={scrollToTop}>Login </li></Link>
                    }
                    {
                        (!authState) &&
                        <Link to={'/signup'}><li className={navLink} onClick={scrollToTop}>SignUp </li></Link>
                    }

                    {
                        (authState) &&
                        <Link to={'/admin'}><li className={navLink} onClick={scrollToTop}>Admin </li></Link>
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar