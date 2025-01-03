import './Footer.scss'

const Footer = () => {

    return (
        <footer>
            <h1 className='nameLogoFooter'>ohmylunch</h1>
            <div className='containerHoraires'>
                <p className='titleHoraires'>Horaires</p>
                <p className='horaires'>Lundi : 12h00 - 15h00 / 19h00 - 22h00</p>
                <p className='horaires'>Mardi :12h00 - 15h00 / 19h00 - 22h00</p>
                <p className='horaires'>Mercredi : 12h00 - 15h00</p>
                <p className='horaires'>Jeudi : 12h00 - 15h00 / 19h00 - 22h00</p>
                <p className='horaires'>Vendredi : 12h00 - 15h00 / 19h00 - 22h00</p>
                <p className='horaires'>Samedi : 12h00 - 15h00 / 19h00 - 22h00</p>
                <p className='horaires'>Dimanche : Fermé</p>
            </div>
            <div className='containerAdresse'>
                <p className='titleAdresse'>Adresse</p>
                <p className='adresse'>528 Place du Château</p>
                <p className='adresse'>59500 DOUAI</p>
            </div>            
        </footer>
    )
}

export default Footer