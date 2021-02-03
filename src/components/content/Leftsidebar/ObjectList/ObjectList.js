import React from 'react'

import { ware } from '../../../../directories';
import SingleObject from './SingleObject';

function ObjectList() {

    return (
        <>
            {ware && ware.map((value) => <SingleObject key={value.id} title={value.name} price={value.price.basicPrice} count={value.price.count} />)}
        </>
    )
}

export default ObjectList
