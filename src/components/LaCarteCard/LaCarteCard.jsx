import './LaCarteCard.scss'

import heart from '../../assets/svg/heart.svg';
import plat from '../../assets/img/plat.jpg';

const LaCarteCard = () => {

    return (
        <div className='laCarteCard'>
            <img src={plat} alt='plat' />
            <div className='laCarteCardContent'>
                <div className='laCarteCardText'>
                    <h4>Salade César</h4>
                    <p>Salade, poulet, tomates, parmesan, croûtons</p>
                </div>
                <div className='laCarteCardFooter'>
                    <img src={heart} alt="heart" />
                    <p>12€</p>
                </div>
            </div>
        </div>
    )
}

export default LaCarteCard