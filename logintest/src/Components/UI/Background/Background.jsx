import './Background.css';
import  image   from '../../../Images/background.jpg';

export const Background = () => {
    return(
        <div className="background-container">
            <img className="background" alt="home" src={image}></img>
        </div>
    )
}
