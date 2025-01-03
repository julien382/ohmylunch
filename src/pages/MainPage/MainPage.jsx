import ContainerCity from '../../components/ContainerCity/ContainerCity'
import Fonctionnement from '../../components/Fonctionnement/Fonctionnement'
import NavBar from '../../components/NavBar/NavBar'
import './MainPage.scss'

const MainPage = () => {

    return (
        <div>
            <ContainerCity />
            <NavBar />
            <Fonctionnement />
        </div>
    )
}

export default MainPage