import { useState } from 'react/cjs/react.development'
import { useForm } from 'react-hook-form'
import './Form.css'

export const FormLogin = ({event, data, login})=>{
    
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [isvalid, setisvalid] = useState('validationTextclose')
    
    return(
        <>
        <div className="containerF">
            <div className='inputs'>
                <label htmlFor="">EMAIL</label>
                <input type="text" name="email" id="email" placeholder='Hello@reallygreatesite.com' onChange={event}/>
                <h2 className={isvalid}>El compo no puede estar vacios</h2>
                <label htmlFor="">PASSWORD</label>
                <input type="password" name="password" id="password" placeholder='*******' onChange={data}/>
            </div>
            <div className='remember'>
                <input type="checkbox" name="remember" id="remember"  />
                <h3>Remember me</h3>
            </div>
            <div className='forgot'>
                <a href="#!">Forgot Password?</a>
                <button className='btn' onClick={login}>Sing in</button>
            </div>
        </div>  
        </>
    )
}