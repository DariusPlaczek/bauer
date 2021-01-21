import React from 'react'

import { myMaterial } from '../../../../units/myMaterial'
import SingleObject from './SingleObject';

function ObjectList() {

    return (
        <>
            {myMaterial.basic.map((value) => <SingleObject key={value.id} title={value.name} price={value.basicPrice} count={value.count} />)}
        </>
    )
}

export default ObjectList
