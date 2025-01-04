import './LaCarte.scss'

import heart from '../../assets/svg/heart.svg';
import plat from '../../assets/img/plat.jpg';
import plat2 from '../../assets/img/plat2.jpg';
import plat3 from '../../assets/img/plat3.jpg';

const LaCarte = () => {

    return (
        <div className='laCarte'>
            <h2 className='laCarteTitle'>La Carte</h2>

            <h3 className='laCarteTypePlats'>ENTREES</h3>

            <div className='laCarteCards'>
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

                <div className='laCarteCard'>
                    <img src={plat2} alt='plat' />
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

                <div className='laCarteCard'>
                    <img src={plat3} alt='plat' />
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
            </div>
        </div>
    )
}

export default LaCarte