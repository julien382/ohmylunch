import './Fonctionnement.scss'
import cityIcon from '../../assets/svg/city.svg';

const Fonctionnement = () => {

    return (
        <div className='fonctionnement'>

            <h2 className='fonctionnementTitle'>Fonctionnement</h2>

            <div className="fonctionnementCards">
                <div className="fonctionnementCard">
                    <div className="fonctionnementCardNumber">
                        <span>1</span>
                    </div>
                    <img src={cityIcon} alt="city" />
                    <p>Choisissez un restaurant</p>
                </div>

                <div className="fonctionnementCard">
                    <div className="fonctionnementCardNumber">
                        <span>2</span>
                    </div>
                    <img src={cityIcon} alt="city" />
                    <p>Présenter la liste au serveur</p>
                </div>

                <div className="fonctionnementCard">
                    <div className="fonctionnementCardNumber">
                        <span>3</span>
                    </div>
                    <img src={cityIcon} alt="city" />
                    <p>Dégustez au restaurant</p>
                </div>


            </div>

        </div>
    )
}

export default Fonctionnement