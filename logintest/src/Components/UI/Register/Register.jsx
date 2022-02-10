import './Register.css'
import React, { useState} from 'react'
import axios from 'axios'


export const Register = () => {

    const ApiUsers = 'https://localhost:44352/api/Users'
    const [data,setData] = useState([])

    const [insertUsers,setInsertUsers] = useState(false)
    const [datosDatabase,setDatosDatabase] = useState({
        idusuario:'',
        nombre:'',
        apellidos:'',
        fechaNacimiento:'',
        telefono:'',
        email:'',
        contraseña:'',
        estado:'',
        departamento:'',
        municipio:''
    })

    const handleChange = e => {
        const{name,value} = e.target
        setDatosDatabase({
            ...datosDatabase,
            [name]: value
        })
        console.log(datosDatabase)
    }

    const petitionPost = async () => {
        delete datosDatabase.idusuario
        datosDatabase.departamento = parseInt(datosDatabase.departamento)
        datosDatabase.municipio = parseInt(datosDatabase.municipio)
        await axios.post(ApiUsers,datosDatabase)
        .then(response => {
            setData(data.concat(response.data))
            changeInsert()
        }).catch(error=>{
            console.log(error)
        })
    }

    const changeInsert = () => {
        setInsertUsers(!insertUsers)
    } 

    return (
        <>
            <main className="divSingIn">

                <div className="item1">

                    <div className="headBoard">
                        <h1>Create New Account</h1>
                        <h5>Already Registered? <a href="https://www.google.com/?hl=es">Login here.</a></h5> 
                    </div>

                    <div className="divForm">

                        <form className="formSingIn">

                            <b><p>NAME</p></b>
                            <input type="text" name="nombre" onChange={handleChange} ></input>

                            <b><p>SURNAME</p></b>
                            <input type="text" name="apellidos" onChange={handleChange} ></input>

                            <b><p>EMAIL</p></b>
                            <input type="text" name="email" onChange={handleChange}></input>

                            <b><p>PASSWORD</p></b>
                            <input type="password" name="contraseña" onChange={handleChange}></input>

                            <b><p>MOBILE NUMBER</p></b>
                            <input type="text" name="telefono" onChange={handleChange}></input>

                            <b><p>DATE OF BIRTH</p></b>
                            <input type="text" name="fechaNacimiento" placeholder="aaaa-mm-dd" onChange={handleChange}></input>

                            <b><p>STATE</p></b>
                            <input type="text" name="estado" onChange={handleChange} ></input>

                            <b><p>DEPARTMENT</p></b>
                            <input type="number" name="departamento" onChange={handleChange}></input>

                            <b><p>MUNICIPALITY</p></b>
                            <input type="number" name="municipio" onChange={handleChange}></input><br/>

                            <button className="btnSingUp" onClick={()=>petitionPost()}><b>Sign In</b></button>

                        </form>

                    </div>

                </div>

                <div className="item2">
                </div>
            </main>
        </>
    )
}