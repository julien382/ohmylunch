import './Cart.scss';
import { useLocation } from 'react-router-dom';
import LaCarteCard from '../LaCarteCard/LaCarteCard';
import { useState, useEffect } from 'react';

const Cart = () => {
  const location = useLocation();
  const [panier, setPanier] = useState(location.state?.panier || JSON.parse(localStorage.getItem('panier')) || []);

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

  if (panier.length === 0) {
    return (
      <div className='cart'>
        <h2 className='cartTitle'>Panier</h2>
        <p>Votre panier est vide.</p>
      </div>
    );
  }

  return (
    <div className='cart'>
      <h2 className='cartTitle'>Panier</h2>

      {/* Afficher les plats ajoutés au panier */}
      <div className='laCarteCards'>
        {panier.map((item, index) => (
          <LaCarteCard
            key={index}
            img={item.img}
            title={item.title}
            text={item.text}
            price={item.price}
            isFavorite={true}  // Toujours en favori dans le panier
            onToggleFavorite={togglePanier}  // Passer la fonction pour ajouter ou supprimer du panier
          />
        ))}
      </div>

      {/* Ajouter le message en bas */}
      <p className='serverReminder'>Présentez cette liste au serveur pour finaliser votre commande.</p>
    </div>
  );
};

export default Cart;
