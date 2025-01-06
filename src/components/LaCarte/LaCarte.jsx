import './LaCarte.scss';
import LaCarteCard from '../LaCarteCard/LaCarteCard';
import data from '../../data/dataMenu.json'; // Importer les données JSON
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const LaCarte = () => {
  // Créer un état pour stocker les chemins d'images résolus
  const [images, setImages] = useState({});

  // Utiliser useEffect pour importer les images au chargement du composant
  useEffect(() => {
    const loadImages = async () => {
      const imageImports = {};

      // Charger les images dynamiquement pour chaque catégorie
      for (let category in data) {
        for (let card of data[category]) {
          const imgPath = `../../assets/img/${card.img}.jpg`;
          imageImports[card.img] = (await import(`${imgPath}`)).default;
        }
      }

      setImages(imageImports);
    };

    loadImages();
  }, []); // Ce useEffect ne s'exécute qu'une seule fois, au montage du composant

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
              img={images[card.img]}  // Utiliser l'image chargée dynamiquement
              title={card.title}
              text={card.text}
              price={card.price}
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
              img={images[card.img]}  // Utiliser l'image chargée dynamiquement
              title={card.title}
              text={card.text}
              price={card.price}
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
              img={images[card.img]}  // Utiliser l'image chargée dynamiquement
              title={card.title}
              text={card.text}
              price={card.price}
            />
          ))}
        </div>
      </div>

      <Link to="/Panier" className='buttonCommander'>
        <p>Commander</p>
      </Link>
    </div>
  );
}

export default LaCarte;
