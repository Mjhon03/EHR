import './Return.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export const ArrowReturn = ()=>{

    return(
        <>
        <div className="containerA">
            <Link to="/">
                <a className="btnArrow" href="/" role="button" data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faLongArrowAltLeft}/></a>
            </Link>
        </div>
        </>
    )
}