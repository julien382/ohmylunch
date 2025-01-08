import './Cart.scss';
import serveurClient from '../../assets/img/serveurClient.jpg';
import { useLocation } from 'react-router-dom';
import LaCarteCard from '../LaCarteCard/LaCarteCard';
import { useState, useEffect } from 'react';

const Cart = () => {
  const location = useLocation();
  const [panier, setPanier] = useState(location.state?.panier || JSON.parse(localStorage.getItem('panier')) || { entrees: [], plats: [], desserts: [] });

  // Fonction pour ajouter ou supprimer un élément du panier
  const togglePanier = (card, category) => {
    setPanier((prevPanier) => {
      const isItemInCategory = prevPanier[category].some(item => item.id === card.id);

      if (!isItemInCategory) {
        // Ajouter l'élément si pas déjà dans le panier
        return {
          ...prevPanier,
          [category]: [...prevPanier[category], card],
        };
      } else {
        // Supprimer l'élément du panier
        return {
          ...prevPanier,
          [category]: prevPanier[category].filter(item => item.id !== card.id),
        };
      }
    });
  };

  // Log du panier dans le localStorage pour déboguer
  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier));  // Sauvegarder le panier dans localStorage
  }, [panier]);

  return (
    <div className='cartContainer'>
      <img src={serveurClient} alt='serveurClient' className='cartImage' />
      
      <div className='cart'>
        <h2 className='cartTitle'>Panier</h2>

        {panier.entrees.length === 0 && panier.plats.length === 0 && panier.desserts.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <>
            {/* Section Entrées */}
            {panier.entrees.length > 0 && (
              <div className='panierSection'>
                <h3 className='sectionTitle'>ENTREES</h3> {/* Titre de la section */}
                <div className='laCarteCards'>
                  {panier.entrees.map((item) => (
                    <LaCarteCard
                      key={item.id}
                      img={`ohmylunch/assets/img/${item.img}.jpg`}  // Retour à l'URL d'image d'origine
                      title={item.title}
                      text={item.text}
                      price={item.price}
                      isFavorite={true}  // Toujours en favori dans le panier
                      onToggleFavorite={() => togglePanier(item, 'entrees')}  // Fonction pour ajouter/supprimer
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Section Plats */}
            {panier.plats.length > 0 && (
              <div className='panierSection'>
                <h3 className='sectionTitle'>PLATS</h3> {/* Titre de la section */}
                <div className='laCarteCards'>
                  {panier.plats.map((item) => (
                    <LaCarteCard
                      key={item.id}
                      img={`ohmylunch/assets/img/${item.img}.jpg`}  // Retour à l'URL d'image d'origine
                      title={item.title}
                      text={item.text}
                      price={item.price}
                      isFavorite={true}  // Toujours en favori dans le panier
                      onToggleFavorite={() => togglePanier(item, 'plats')}  // Fonction pour ajouter/supprimer
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Section Desserts */}
            {panier.desserts.length > 0 && (
              <div className='panierSection'>
                <h3 className='sectionTitle'>DESSERTS</h3> {/* Titre de la section */}
                <div className='laCarteCards'>
                  {panier.desserts.map((item) => (
                    <LaCarteCard
                      key={item.id}
                      img={`ohmylunch/assets/img/${item.img}.jpg`}  // Retour à l'URL d'image d'origine
                      title={item.title}
                      text={item.text}
                      price={item.price}
                      isFavorite={true}  // Toujours en favori dans le panier
                      onToggleFavorite={() => togglePanier(item, 'desserts')}  // Fonction pour ajouter/supprimer
                    />
                  ))}
                </div>
              </div>
            )}
            <p className='serverReminder'>Présentez cette liste au serveur pour finaliser votre commande.</p>
          </>
        )}

      </div>
    </div>
  );
};

export default Cart;
