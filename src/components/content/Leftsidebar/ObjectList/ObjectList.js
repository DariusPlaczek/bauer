import React, {useState} from 'react'
import { useSelector } from 'react-redux';

import SingleObject from './SingleObject'

function ObjectList() {
    const wares = useSelector((state) => state.reduxWare.products)
    const warehouseCount = useSelector((state) => state.reduxCWCount)
    //const test = wares.slice()
   //console.log(warehouseCount);
    return (
        <>
            {wares.map((value, key) => <SingleObject key={value.idPW} title={value.name} price={value.price.basicPrice} />)}
            
        </>
    )
}

export default ObjectList


// {/* {ware && ware.ware.map((value) => <SingleObject key={value.ware.idPW} title={value.ware.name} price={0} count={100} />)} */}