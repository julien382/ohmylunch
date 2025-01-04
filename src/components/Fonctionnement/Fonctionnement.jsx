import './Fonctionnement.scss'
import listeIcon from '../../assets/svg/liste.svg';
import portableIcon from '../../assets/svg/portable.svg';
import shopIcon from '../../assets/svg/shop.svg';

const Fonctionnement = () => {

    return (
        <div className='fonctionnement'>

            <h2 className='fonctionnementTitle'>Fonctionnement</h2>

            <div className="fonctionnementCards">
                <div className="fonctionnementCard">
                    <div className="fonctionnementCardNumber">
                        <span>1</span>
                    </div>
                    <img src={listeIcon} alt="city" />
                    <p>Composez votre menu</p>
                </div>

                <div className="fonctionnementCard">
                    <div className="fonctionnementCardNumber">
                        <span>2</span>
                    </div>
                    <img src={portableIcon} alt="city" />
                    <p>Présenter la liste au serveur</p>
                </div>

                <div className="fonctionnementCard">
                    <div className="fonctionnementCardNumber">
                        <span>3</span>
                    </div>
                    <img src={shopIcon} alt="city" />
                    <p>Dégustez au restaurant</p>
                </div>


            </div>

        </div>
    )
}

export default Fonctionnement