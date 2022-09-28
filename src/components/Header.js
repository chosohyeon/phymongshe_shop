import React, { useEffect, useState } from 'react';
import MainNav from './MainNav';
import TopBanner from './TopBanner';
import '../css/Header.scss';
import { FiSearch, FiShoppingCart, FiUserPlus } from 'react-icons/fi';

const Header = () => {
    const [on, setOn] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            let sct = window.scrollY;
            sct > 0 ? setOn(true) : setOn(false)
        }
        window.addEventListener('scroll', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
        }
    }, [])
    return (
        <header className={`Header ${on ? 'on' : ''}`}>
            {console.log(on)}
            <TopBanner />
            <div className='gnb'>
                <h1>
                    <a href='/phymongshe_shop'>
                        <img src={process.env.PUBLIC_URL + '/assets/img/top_logo.png'} alt="" />
                    </a>
                </h1>
                <nav className='inner'>
                    <MainNav />
                </nav>
                <ul className='rt'>
                    <li><FiUserPlus /></li>
                    <li className='cart_num'>
                        <FiShoppingCart />
                        <span>0</span>
                    </li>
                    <li><FiSearch /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header