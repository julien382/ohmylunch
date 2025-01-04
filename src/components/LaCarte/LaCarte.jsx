import './LaCarte.scss'

import heart from '../../assets/svg/heart.svg';
import plat from '../../assets/img/plat.jpg';
import plat2 from '../../assets/img/plat2.jpg';
import plat3 from '../../assets/img/plat3.jpg';
import LaCarteCard from '../LaCarteCard/LaCarteCard';

const LaCarte = () => {

    return (
        <div className='laCarte'>
            <h2 className='laCarteTitle'>La Carte</h2>

            <h3 className='laCarteTypePlats'>ENTREES</h3>

            <span className='laCarteTypePlatsBarre'></span>

            <div className='laCarteCards'>
                <LaCarteCard />
                <LaCarteCard />
                <LaCarteCard />
            </div>
        </div>
    )
}

export default LaCarte