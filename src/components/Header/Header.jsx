import './Header.scss'

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
              <h1 className='nameLogo'>ohmylunch</h1>
            </Link>
        </header>
    )
}

export default Header