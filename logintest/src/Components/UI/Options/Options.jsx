import './Options.css';
import { Link } from 'react-router-dom';


export const Options = () => {
    return(
        <div className="flex-options">
            <div className='option'>
                <Link to='/singup' className='element'>
                    <h2 className='element'>Sing Up</h2>
                </Link>
            </div>
            <div className='option'>
                <Link to="/login" className='element'>
                    <h2 className='element'>Login</h2>
                </Link>
            </div>
        </div>
    )
}
