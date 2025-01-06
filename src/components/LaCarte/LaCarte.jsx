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

      // Charger les images dynamiquement et les stocker dans l'état
      for (let card of data) {
        const imgPath = `../../assets/img/${card.img}.jpg`;
        imageImports[card.img] = (await import(`${imgPath}`)).default;
      }

      setImages(imageImports);
    };

    loadImages();
  }, []); // Ce useEffect ne s'exécute qu'une seule fois, au montage du composant

  return (
    <div className='laCarte'>
      <h2 className='laCarteTitle'>La Carte</h2>

      <div className='laCarteTypePlatsContainer'>
        <h3 className='laCarteTypePlats'>ENTREES</h3>
        <span className='laCarteTypePlatsBarre'></span>

        <div className='laCarteCards'>
          {data.map((card, index) => (
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

      <div className='laCarteTypePlatsContainer'>
        <h3 className='laCarteTypePlats'>PLATS</h3>
        <span className='laCarteTypePlatsBarre'></span>

        <div className='laCarteCards'>
          <LaCarteCard img={images['plat']} title={"Filet de boeuf aux herbes"} text={"Accompagné de sa ribambelle de légumes"} price={"40€"} />
          <LaCarteCard img={images['plat2']} title={"Parmentier de queue de boeuf"} text={"À la truffe noir sur sa purée de panais"} price={"35€"}  />
          <LaCarteCard img={images['plat3']} title={"Filet du Turbot"} text={"Aux agrumes"} price={"44€"}  />
        </div>
      </div>

      <div className='laCarteTypePlatsContainer'>
        <h3 className='laCarteTypePlats'>DESSERTS</h3>
        <span className='laCarteTypePlatsBarre'></span>

        <div className='laCarteCards'>
          <LaCarteCard img={images['plat']} title={"Paris-Brest"} text={"Revisité"} price={"18€"} />
          <LaCarteCard img={images['plat2']} title={"Macaron au chocolat d'exception"} text={"Et glace à la vanille de Madagascar"} price={"22€"}  />
          <LaCarteCard img={images['plat3']} title={"Mousse au chocolat"} text={"Au piment d'espelette à la truffe noire"} price={"23€"}  />
        </div>
      </div>

      <Link to="/Panier" className='buttonCommander'>
        <p>Commander</p>
      </Link>
    </div>
  );
}

export default LaCarte;
