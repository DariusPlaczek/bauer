import React from 'react'

import { tradeMaterial } from '../../units/tradeMaterial'
import SingleObject from './SingleObject';

function ObjectList() {

    console.log(typeof(tradeMaterial.basic.basicPrice));
    return (
        <>
            {tradeMaterial.basic.map((value) => <SingleObject key={value.id} title={value.name} price={value.basicPrice} />)}
        </>
    )
}

export default ObjectList
