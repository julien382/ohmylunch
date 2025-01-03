import ContainerCity from '../../components/ContainerCity/ContainerCity'
import Fonctionnement from '../../components/Fonctionnement/Fonctionnement'
import LaCarte from '../../components/LaCarte/LaCarte'
import NavBar from '../../components/NavBar/NavBar'
import './MainPage.scss'

const MainPage = () => {

    return (
        <div>
            <ContainerCity />
            <NavBar />
            <Fonctionnement />
            <LaCarte />
        </div>
    )
}

export default MainPage