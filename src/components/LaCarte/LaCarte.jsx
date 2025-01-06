// LaCarte.js
import './LaCarte.scss';
import LaCarteCard from '../LaCarteCard/LaCarteCard';
import data from '../../data/dataMenu.json';  // Données JSON pour les plats
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const LaCarte = () => {
  const [panier, setPanier] = useState([]);  // Stocke les éléments du panier

  // Fonction pour ajouter un élément au panier
  const ajouterAuPanier = (card) => {
    setPanier((prevPanier) => {
      if (!prevPanier.find(item => item.title === card.title)) {
        return [...prevPanier, card];  // Ajouter l'élément si pas déjà dans le panier
      }
      return prevPanier;  // Ne rien faire si l'élément est déjà dans le panier
    });
  };

  // Log du panier dans le localStorage pour déboguer
  useEffect(() => {
    console.log('Panier:', panier);
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
          {data.entrees.map((card, index) => (
            <LaCarteCard
              key={index}
              img={`/assets/img/${card.img}.jpg`}  // Utiliser le chemin relatif de l'image
              title={card.title}
              text={card.text}
              price={card.price}
              onToggleFavorite={ajouterAuPanier}  // Passer la fonction pour ajouter au panier
            />
          ))}
        </div>
      </div>

      {/* Section Plats */}
      <div className='laCarteTypePlatsContainer'>
        <h3 className='laCarteTypePlats'>PLATS</h3>
        <span className='laCarteTypePlatsBarre'></span>
        <div className='laCarteCards'>
          {data.plats.map((card, index) => (
            <LaCarteCard
              key={index}
              img={`/assets/img/${card.img}.jpg`}  // Utiliser le chemin relatif de l'image
              title={card.title}
              text={card.text}
              price={card.price}
              onToggleFavorite={ajouterAuPanier}  // Passer la fonction pour ajouter au panier
            />
          ))}
        </div>
      </div>

      {/* Section Desserts */}
      <div className='laCarteTypePlatsContainer'>
        <h3 className='laCarteTypePlats'>DESSERTS</h3>
        <span className='laCarteTypePlatsBarre'></span>
        <div className='laCarteCards'>
          {data.desserts.map((card, index) => (
            <LaCarteCard
              key={index}
              img={`/assets/img/${card.img}.jpg`}  // Utiliser le chemin relatif de l'image
              title={card.title}
              text={card.text}
              price={card.price}
              onToggleFavorite={ajouterAuPanier}  // Passer la fonction pour ajouter au panier
            />
          ))}
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
