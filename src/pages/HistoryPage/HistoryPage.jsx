import Fonctionnement from '../../components/Fonctionnement/Fonctionnement'
import './HistoryPage.scss'

import listeIcon from '../../assets/svg/liste.svg';
import portableIcon from '../../assets/svg/portable.svg';
import shopIcon from '../../assets/svg/shop.svg';
import ContainerCity from '../../components/ContainerCity/ContainerCity';
import History from '../../components/History/History';

const HistoryPage = () => {

    return (
        <div>
            <ContainerCity />
            <Fonctionnement 
                icon1={listeIcon} 
                icon2={portableIcon} 
                icon3={shopIcon} 
                text1={"Finalisez vos choix"} 
                text2={"Gardez ce que vous voulez commander"} 
                text3={"Présenter la liste au serveur"} />
            <History />
        </div>
    )
}

export default HistoryPage