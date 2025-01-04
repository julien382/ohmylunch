import './History.scss'

import entree1 from '../../assets/img/plat.jpg';
import entree2 from '../../assets/img/plat2.jpg';
import entree3 from '../../assets/img/plat3.jpg';

const History = () => {
    return (
        <div className='history'>
                <h2 className='historyTitle'>ohmylunch</h2>
                <h3 className='historyText'>NOTRE RESTAURANT</h3>
                <span className='laCarteTypePlatsBarre'></span>

                <div className='historyCards'>
                    <div className='historyCard'>
                        <img src={entree1} alt='plat' />
                        <div className='historyCardContent'>
                            <p>
                                Plongez dans un univers où la passion culinaire rencontre un service chaleureux et une ambiance conviviale. Notre restaurant est une ode aux saveurs authentiques et aux moments de partage.
                                Chaque plat raconte une histoire. Nous sélectionnons avec soin des ingrédients frais, locaux et de saison pour vous offrir une cuisine qui ravit les papilles et l’esprit. Que vous soyez amateur de [type de cuisine, ex. cuisine française raffinée, spécialités méditerranéennes, ou burgers gourmands], notre carte variée saura combler vos envies.
                            </p>
                        </div>
                    </div>



                    <div className='historyCard'>
                        <img src={entree2} alt='plat' />
                        <div className='historyCardContent'>
                            <p>
                                Notre équipe est une véritable symphonie de talents où chaque métier joue un rôle essentiel : en cuisine, nos chefs et commis travaillent avec passion pour créer des plats savoureux et artistiques ; en salle, nos serveurs et responsables veillent à offrir un service impeccable et attentionné ; et en coulisses, nos gestionnaires, plongeurs et autres collaborateurs contribuent à faire fonctionner l’ensemble avec fluidité. Ensemble, nous partageons une même ambition : vous offrir une expérience culinaire mémorable, où professionnalisme, convivialité et passion se rencontrent.
                            </p>
                        </div>
                    </div>

                </div>

        </div>
    )
}

export default History