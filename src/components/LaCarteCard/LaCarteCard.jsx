import './LaCarteCard.scss'
import PropTypes from 'prop-types';
import { useState } from 'react';
import imageDirect1 from '../../assets/img/plat1.jpg';

const LaCarteCard = ({ img, title, text, price, onToggleFavorite }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        // Appeler la fonction pour ajouter ou supprimer du panier
        onToggleFavorite({ title, text, price, img });  
    };

    return (
        <div className='laCarteCard'>
            <img src={imageDirect1} alt={title} className='laCarteCardImage' />
            <div className='laCarteCardContent'>
                <div className='laCarteCardText'>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <div className='laCarteCardFooter'>
                    <svg
                        className={`heartIcon ${isFavorite ? 'filled' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        onClick={toggleFavorite}
                    >
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
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
    onToggleFavorite: PropTypes.func.isRequired,  // Fonction pour ajouter au panier
};

export default LaCarteCard;
