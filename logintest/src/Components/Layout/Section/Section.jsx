import './Section.css'
import { Title } from '../../UI/Title/Title';
import {  Context } from '../../UI/Context/Context';
import { Button } from '../../UI/Button/Button';
import { Form } from '../../UI/Form/Form';

export const Section = () => {
    return(
        <div className="Article">
            <Title />
            <Context />
            <Button />
            <Form />
        </div>
    )
    
}
