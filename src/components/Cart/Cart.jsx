import LaCarteCard from '../LaCarteCard/LaCarteCard'
import './Cart.scss'

import entree1 from '../../assets/img/plat.jpg';
import entree2 from '../../assets/img/plat2.jpg';

const Cart = () => {
    return (
        <div className='cart'>
                <h2 className='cartTitle'>Panier</h2>

                <div className='laCarteTypePlatsContainer'>
                <h3 className='laCarteTypePlats'>ENTREES</h3>

                <span className='laCarteTypePlatsBarre'></span>

                <div className='laCarteCards'>
                    <LaCarteCard img={entree1} title={"Fricassé d'escargot"} text={"Au piment d'espelette"} price={"25€"} />
                </div>
            </div>

            <div className='laCarteTypePlatsContainer'>
                <h3 className='laCarteTypePlats'>PLATS</h3>

                <span className='laCarteTypePlatsBarre'></span>

                <div className='laCarteCards'>
                    <LaCarteCard img={entree1} title={"Filet de boeuf aux herbes"} text={"Accompagné de sa ribambelle de légumes"} price={"40€"} />
                    <LaCarteCard img={entree2} title={"Parmentier de queue de boeuf"} text={"À la truffe noir sur sa purée de panais"} price={"35€"}  />
                </div>
            </div>

            <div className='laCarteTypePlatsContainer'>
                <h3 className='laCarteTypePlats'>DESSERTS</h3>

                <span className='laCarteTypePlatsBarre'></span>

                <div className='laCarteCards'>
                    <LaCarteCard img={entree1} title={"Paris-Brest"} text={"Revisité"} price={"18€"} />
                </div>
            </div>

        </div>
    )
}

export default Cart