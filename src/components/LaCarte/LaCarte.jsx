import './LaCarte.scss';
import LaCarteCard from '../LaCarteCard/LaCarteCard';
import data from '../../data/dataMenu.json';  // Données JSON pour les plats
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const LaCarte = () => {
  const [panier, setPanier] = useState({ entrees: [], plats: [], desserts: [] });  // Stocke les éléments du panier par catégorie

  // Fonction pour ajouter ou supprimer un élément du panier
  const togglePanier = (card, category) => {
    setPanier((prevPanier) => {
      const isItemInCategory = prevPanier[category].some(item => item.id === card.id);

      if (!isItemInCategory) {
        return {
          ...prevPanier,
          [category]: [...prevPanier[category], card],  // Ajouter l'élément à la catégorie appropriée
        };
      } else {
        return {
          ...prevPanier,
          [category]: prevPanier[category].filter(item => item.id !== card.id),  // Supprimer l'élément de la catégorie
        };
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
            const cardWithCategory = { ...card, id: index + 1 };  // Utiliser un ID simple (1, 2, 3,...)
            const isFavorite = panier.entrees.some(item => item.id === cardWithCategory.id);
            return (
              <LaCarteCard
                key={cardWithCategory.id}
                img={`ohmylunch/assets/img/${card.img}.jpg`}  // Toujours ajouter .jpg
                title={cardWithCategory.title}
                text={cardWithCategory.text}
                price={cardWithCategory.price}
                isFavorite={isFavorite}
                onToggleFavorite={() => togglePanier(cardWithCategory, 'entrees')}
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
            const cardWithCategory = { ...card, id: index + 1 };  // Utiliser un ID simple (1, 2, 3,...)
            const isFavorite = panier.plats.some(item => item.id === cardWithCategory.id);
            return (
              <LaCarteCard
                key={cardWithCategory.id}
                img={`ohmylunch/assets/img/${card.img}.jpg`}  // Toujours ajouter .jpg
                title={cardWithCategory.title}
                text={cardWithCategory.text}
                price={cardWithCategory.price}
                isFavorite={isFavorite}
                onToggleFavorite={() => togglePanier(cardWithCategory, 'plats')}
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
            const cardWithCategory = { ...card, id: index + 1 };  // Utiliser un ID simple (1, 2, 3,...)
            const isFavorite = panier.desserts.some(item => item.id === cardWithCategory.id);
            return (
              <LaCarteCard
                key={cardWithCategory.id}
                img={`ohmylunch/assets/img/${card.img}.jpg`}  // Toujours ajouter .jpg
                title={cardWithCategory.title}
                text={cardWithCategory.text}
                price={cardWithCategory.price}
                isFavorite={isFavorite}
                onToggleFavorite={() => togglePanier(cardWithCategory, 'desserts')}
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
