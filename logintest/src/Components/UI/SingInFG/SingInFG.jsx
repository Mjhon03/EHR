import './SingInFG.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';

export const SingInFG = ()=>{

    return(
        <>
        <div className="containerFG">
            <button><FontAwesomeIcon icon={faFacebook}/> <span>Sing in with Facebook</span></button>
            <button><FontAwesomeIcon icon={faGoogle}/> <span>Sing in with Google</span></button>
            <div className='lines'>
                <div className='line'></div>
                <h2>OR</h2>
                <div className='line'></div>
            </div>
        </div>  
        </>
    )
}