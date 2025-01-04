import './Header.scss'

import arrowLeft from '../../assets/svg/arrowLeft.svg';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={arrowLeft} className='arrowLeft' alt='arrowLeft' />
            </Link>
            <Link to="/">
                <h1 className='nameLogo'>ohmylunch</h1>
            </Link>
        </header>
    )
}

export default Header