import './Cart.scss';
import serveurClient from '../../assets/img/serveurClient.jpg';
import { useLocation } from 'react-router-dom';
import LaCarteCard from '../LaCarteCard/LaCarteCard';
import { useState, useEffect } from 'react';

const Cart = () => {
  const location = useLocation();
  const [panier, setPanier] = useState(location.state?.panier || JSON.parse(localStorage.getItem('panier')) || { entrees: [], plats: [], desserts: [] });

  // Fonction pour trier les éléments de chaque catégorie par ID
  const sortItemsById = (categoryItems) => {
    return categoryItems.sort((a, b) => a.id - b.id);  // Tri par ID croissant
  };

  // Log du panier dans le localStorage pour déboguer
  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier));  // Sauvegarder le panier dans localStorage
  }, [panier]);

  return (
    <div className='cartContainer'>
      {/* Toujours afficher l'image */}
      <img src={serveurClient} alt='serveurClient' className='cartImage' />
      
      <div className='cart'>
        <h2 className='cartTitle'>Panier</h2>

        {panier.entrees.length === 0 && panier.plats.length === 0 && panier.desserts.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <div className='laCarteCards'>
            {/* Afficher les entrées */}
            {panier.entrees.length > 0 && (
              <div className='cartSection'>
                <h3>Entrées</h3>
                {sortItemsById(panier.entrees).map((item) => (
                  <LaCarteCard
                    key={item.id}
                    img={`ohmylunch/assets/img/${item.img}.jpg`}  // Toujours ajouter .jpg
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    isFavorite={true}  // Toujours en favori dans le panier
                    onToggleFavorite={() => {}}  // Fonction vide, on n'a pas besoin de changer l'état dans le panier
                  />
                ))}
              </div>
            )}

            {/* Afficher les plats */}
            {panier.plats.length > 0 && (
              <div className='cartSection'>
                <h3>Plats</h3>
                {sortItemsById(panier.plats).map((item) => (
                  <LaCarteCard
                    key={item.id}
                    img={`ohmylunch/assets/img/${item.img}.jpg`}  // Toujours ajouter .jpg
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    isFavorite={true}  // Toujours en favori dans le panier
                    onToggleFavorite={() => {}}  // Fonction vide
                  />
                ))}
              </div>
            )}

            {/* Afficher les desserts */}
            {panier.desserts.length > 0 && (
              <div className='cartSection'>
                <h3>Desserts</h3>
                {sortItemsById(panier.desserts).map((item) => (
                  <LaCarteCard
                    key={item.id}
                    img={`ohmylunch/assets/img/${item.img}.jpg`}  // Toujours ajouter .jpg
                    title={item.title}
                    text={item.text}
                    price={item.price}
                    isFavorite={true}  // Toujours en favori dans le panier
                    onToggleFavorite={() => {}}  // Fonction vide
                  />
                ))}
              </div>
            )}

            <p className='serverReminder'>Présentez cette liste au serveur pour finaliser votre commande.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;