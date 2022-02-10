import './Header.css'
import { Logo } from '../../UI/Logo/Logo'
import { Options } from '../../UI/Options/Options'

export const Header = () => {
    return(
        <>
            <div className="flex-nav">
                < Logo/>
                < Options />
            </div>
        </>
    )
}
