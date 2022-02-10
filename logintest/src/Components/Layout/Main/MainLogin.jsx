import './MainLogin.css'
import { ArrowReturn } from '../../UI/Return/Return'
import { Sing } from '../../UI/SIngIn/Singin'
import { SingInFG } from '../../UI/SingInFG/SingInFG'
import { FormLogin } from '../../UI/FormLogin/FormLogin'
import { Logo } from '../../UI/Logo/Logo'
import axios from 'axios'
import {useState} from 'react'
import Cookies from 'universal-cookie/es6'

const baseurl="https://localhost:44352/api/Users/"
const cookies = new Cookies();

export const Main = ()=>{
    
    const[emaiL, setemail] = useState({email:"email",})
    const[password, setpassword] = useState({password:"password",})
    
    const setEventToEmail=((event)=>{
        setemail(event.target.value)
    })
    const SetEventToPassword=((event)=>{
        setpassword(event.target.value)
    })

    const login=(()=>{
        axios.get(baseurl, {params:{email:emaiL, contraseña:password}})
        .then(response=>{
            console.log(response.data);
            return response.data;
        })
        .then(response=>{
            if (response.length>0) {
                let datos = response[0];
                cookies.set('idusuario', datos.idusuario, {path:"/"})
                cookies.set('nombre', datos.nombre, {path:"/"})
                cookies.set('apellidos', datos.apellidos, {path:"/"})
                cookies.set('email', datos.email, {path:"/"})
                cookies.set('estado', datos.estado, {path:"/"})
                cookies.set('fechaNacimiento', datos.fechaNacimiento, {path:"/"})
                cookies.set('telefono', datos.telefono, {path:"/"})
                alert(`Bienvenido ${datos.nombre} ${datos.apellidos}`)
                window.location.href="./"
            }else{
                alert("El email o la contraseña son incorrectos")
            }
        })
        .catch(ex=>{
            console.log(ex);
        })
    })
    return(
        <>
        <div className='allinfo'>
            <div className='img'>
                <Logo/>
            </div>
            <div className='Components'>
                <ArrowReturn/>
                <Sing/>
                <SingInFG/>
                <FormLogin event={setEventToEmail} data={SetEventToPassword} login={login} />
            </div>
        </div>
        </>
    )
}