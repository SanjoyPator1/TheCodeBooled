import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

const E06dataBinding = () => {

    const myElementRef = useRef(null)

    const [barData, setBarData] = useState([10,20,40,30,10])

    useEffect(()=>{

        const svg = d3.select(myElementRef.current)

        const firstRectDatum = svg.select('rect').datum(barData)
        // console.log({firstRectDatum})

        const allRectDatum = svg.selectAll('rect').datum(barData)
        // console.log({allRectDatum})

        const allRectData = svg.selectAll('rect').data(barData)
        // console.log({allRectData})

    })

    return (
        <div>
            <h3>E06 data binding</h3>
            <svg ref={myElementRef} height={20} width={20}>
                <rect/>
                <rect/>
                <rect/>
                <rect/>
                <rect/>
            </svg>
        </div>
    )
}

export default E06dataBinding