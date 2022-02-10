import './Home.css';
import { Header } from '../../Layout/Header/Header';
import { Section } from '../../Layout/Section/Section';
import { Background } from '../../UI/Background/Background';


export const Home = () => {
    
    return(
        <>
            < Header />
            <div className="Home_container">
                <div className="Home_elements">
                    <Section />
                    <Background />
                </div>
            </div>
        </>
    )  
}
