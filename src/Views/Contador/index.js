import React from 'react'
import './contador.css'
import Botao from './Botao'
import Contador from './contador'
import Label from './Label'
export { default as Contador } from './contador';


function index() {
    return (
        <div>
            <Label name="Cronometro" />
            <Contador />
            <Botao />
        </div>
    )
}

export default index;

