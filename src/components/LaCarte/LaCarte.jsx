import './LaCarte.scss'

import LaCarteCard from '../LaCarteCard/LaCarteCard';

import entree1 from '../../assets/img/plat.jpg';
import entree2 from '../../assets/img/plat2.jpg';
import entree3 from '../../assets/img/plat3.jpg';

import { Link } from "react-router-dom";

const LaCarte = () => {

    return (
        <div className='laCarte'>
            <h2 className='laCarteTitle'>La Carte</h2>

            <div className='laCarteTypePlatsContainer'>
                <h3 className='laCarteTypePlats'>ENTREES</h3>

                <span className='laCarteTypePlatsBarre'></span>

                <div className='laCarteCards'>
                    <LaCarteCard img={entree1} title={"Fricassé d'escargot"} text={"Au piment d'espelette"} price={"25€"} />
                    <LaCarteCard img={entree2} title={"Foie gras de canard mi-cuit"} text={"Et ses copeaux de truffe noire"} price={"35€"}  />
                    <LaCarteCard img={entree3} title={"Oeuf au plat"} text={"Assaisonné à la truffe sur le lit de caviar"} price={"20€"}  />
                </div>
            </div>

            <div className='laCarteTypePlatsContainer'>
                <h3 className='laCarteTypePlats'>PLATS</h3>

                <span className='laCarteTypePlatsBarre'></span>

                <div className='laCarteCards'>
                    <LaCarteCard img={entree1} title={"Filet de boeuf aux herbes"} text={"Accompagné de sa ribambelle de légumes"} price={"40€"} />
                    <LaCarteCard img={entree2} title={"Parmentier de queue de boeuf"} text={"À la truffe noir sur sa purée de panais"} price={"35€"}  />
                    <LaCarteCard img={entree3} title={"Filet du Turbot"} text={"Aux agrumes"} price={"44€"}  />
                </div>
            </div>

            <div className='laCarteTypePlatsContainer'>
                <h3 className='laCarteTypePlats'>DESSERTS</h3>

                <span className='laCarteTypePlatsBarre'></span>

                <div className='laCarteCards'>
                    <LaCarteCard img={entree1} title={"Paris-Brest"} text={"Revisité"} price={"18€"} />
                    <LaCarteCard img={entree2} title={"Macaron au chocolat d'exception"} text={"Et glace à la vanille de Madagascar"} price={"22€"}  />
                    <LaCarteCard img={entree3} title={"Mousse au chocolat"} text={"Au piment d'espelette à la truffe noire"} price={"23€"}  />
                </div>
            </div>

            <Link to="/Panier" className='buttonCommander'>
              <p>Commander</p>
            </Link>

        </div>
    )
}

export default LaCarte