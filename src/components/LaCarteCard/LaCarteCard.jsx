import './LaCarteCard.scss'

import heart from '../../assets/svg/heart.svg';

const LaCarteCard = ({img, title, text, price}) => {

    return (
        <div className='laCarteCard'>
            <img src={img} alt='plat' />
            <div className='laCarteCardContent'>
                <div className='laCarteCardText'>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <div className='laCarteCardFooter'>
                    <img src={heart} alt="heart" />
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default LaCarteCard