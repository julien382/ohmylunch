import './LaCarte.scss';
import LaCarteCard from '../LaCarteCard/LaCarteCard';
import data from '../../data/dataMenu.json';  // Données JSON pour les plats
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const LaCarte = () => {
  const [panier, setPanier] = useState([]);  // Stocke les éléments du panier

  // Fonction pour ajouter ou supprimer un élément du panier
  const togglePanier = (card) => {
    setPanier((prevPanier) => {
      const itemIndex = prevPanier.findIndex(item => item.title === card.title);
      if (itemIndex === -1) {
        return [...prevPanier, card];  // Ajouter l'élément si pas déjà dans le panier
      } else {
        return prevPanier.filter(item => item.title !== card.title);  // Supprimer l'élément du panier
      }
    });
  };

  // Log du panier dans le localStorage pour déboguer
  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier));  // Sauvegarder le panier dans localStorage
  }, [panier]);

  return (
    <div className='laCarte'>
      <h2 className='laCarteTitle'>La Carte</h2>

      {/* Section Entrées */}
      <div className='laCarteTypePlatsContainer'>
        <h3 className='laCarteTypePlats'>ENTREES</h3>
        <span className='laCarteTypePlatsBarre'></span>
        <div className='laCarteCards'>
          {data.entrees.map((card, index) => {
            const isFavorite = panier.some(item => item.title === card.title);
            return (
              <LaCarteCard
                key={index}
                img={`ohmylunch/assets/img/${card.img}.jpg`}  // Toujours ajouter .jpg
                title={card.title}
                text={card.text}
                price={card.price}
                isFavorite={isFavorite}
                onToggleFavorite={togglePanier}
              />
            );
          })}
        </div>
      </div>

      {/* Section Plats */}
      <div className='laCarteTypePlatsContainer'>
        <h3 className='laCarteTypePlats'>PLATS</h3>
        <span className='laCarteTypePlatsBarre'></span>
        <div className='laCarteCards'>
          {data.plats.map((card, index) => {
            const isFavorite = panier.some(item => item.title === card.title);
            return (
              <LaCarteCard
                key={index}
                img={`ohmylunch/assets/img/${card.img}.jpg`}  // Toujours ajouter .jpg
                title={card.title}
                text={card.text}
                price={card.price}
                isFavorite={isFavorite}
                onToggleFavorite={togglePanier}
              />
            );
          })}
        </div>
      </div>

      {/* Section Desserts */}
      <div className='laCarteTypePlatsContainer'>
        <h3 className='laCarteTypePlats'>DESSERTS</h3>
        <span className='laCarteTypePlatsBarre'></span>
        <div className='laCarteCards'>
          {data.desserts.map((card, index) => {
            const isFavorite = panier.some(item => item.title === card.title);
            return (
              <LaCarteCard
                key={index}
                img={`ohmylunch/assets/img/${card.img}.jpg`}  // Toujours ajouter .jpg
                title={card.title}
                text={card.text}
                price={card.price}
                isFavorite={isFavorite}
                onToggleFavorite={togglePanier}
              />
            );
          })}
        </div>
      </div>

      {/* Lien vers la page Panier */}
      <Link 
        to={{
          pathname: "/panier",
          state: { panier },  // Passer le panier à la page Panier
        }} 
        className='buttonCommander'
      >
        <p>Commander</p>
      </Link>
    </div>
  );
};

export default LaCarte;