import './LaCarteCard.scss'

import heart from '../../assets/svg/heart.svg';
import PropTypes from 'prop-types';

const LaCarteCard = ({img, title, text, price}) => {

    return (
        <div className='laCarteCard'>
            <img src={img} alt='plat' />
            <div className='laCarteCardContent'>
                <div className='laCarteCardText'>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <div className='laCarteCardFooter'>
                    <img src={heart} alt="heart" />
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

LaCarteCard.propTypes = {
    img: PropTypes.string.isRequired,   // URL de l'image
    title: PropTypes.string.isRequired, // Titre du plat
    text: PropTypes.string,             // Description du plat
    price: PropTypes.oneOfType([        // Prix peut être un nombre ou une chaîne
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default LaCarteCard