import './LaCarte.scss'

import LaCarteCard from '../LaCarteCard/LaCarteCard';

const LaCarte = () => {

    return (
        <div className='laCarte'>
            <h2 className='laCarteTitle'>La Carte</h2>

            <h3 className='laCarteTypePlats'>ENTREES</h3>

            <span className='laCarteTypePlatsBarre'></span>

            <div className='laCarteCards'>
                <LaCarteCard />
                <LaCarteCard />
                <LaCarteCard />
            </div>
        </div>
    )
}

export default LaCarte