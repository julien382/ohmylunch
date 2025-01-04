import './LaCarte.scss'

import LaCarteCard from '../LaCarteCard/LaCarteCard';

import entree1 from '../../assets/img/plat.jpg';
import entree2 from '../../assets/img/plat2.jpg';
import entree3 from '../../assets/img/plat3.jpg';

const LaCarte = () => {

    return (
        <div className='laCarte'>
            <h2 className='laCarteTitle'>La Carte</h2>

            <h3 className='laCarteTypePlats'>ENTREES</h3>

            <span className='laCarteTypePlatsBarre'></span>

            <div className='laCarteCards'>
                <LaCarteCard img={entree1} title={"Fricassé d'escargot"} text={"Au piment d'espelette"} price={"25€"} />
                <LaCarteCard img={entree2} title={"Foie gras de canard mi-cuit"} text={"Et ses copeaux de truffe noire"} price={"35€"}  />
                <LaCarteCard img={entree3} title={"Oeuf au plat"} text={"Assaisonné à la truffe sur le lit de caviar"} price={"20€"}  />
            </div>
        </div>
    )
}

export default LaCarte