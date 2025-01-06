import './LaCarteCard.scss'

import heart from '../../assets/svg/heart.svg';
import filledHeart from '../../assets/svg/heartFull.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';

const LaCarteCard = ({img, title, text, price}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className='laCarteCard'>
            <img src={img} alt='plat' className='laCarteCardImage' />
            <div className='laCarteCardContent'>
                <div className='laCarteCardText'>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <div className='laCarteCardFooter'>
                    <img 
                        src={isFavorite ? filledHeart : heart} 
                        alt="heart" 
                        onClick={toggleFavorite} 
                        className='heartIcon'
                    />
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