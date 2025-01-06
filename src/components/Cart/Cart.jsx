// Cart.js
import './Cart.scss';
import { useLocation } from 'react-router-dom';
import LaCarteCard from '../LaCarteCard/LaCarteCard';

const Cart = () => {
  const location = useLocation();
  const panier = location.state?.panier || JSON.parse(localStorage.getItem('panier')) || [];  // Récupérer les données du localStorage

  console.log('Panier dans Cart:', panier);  // Affichage du panier pour le débogage

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
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
