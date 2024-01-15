import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

const E07attStyle = () => {

    const myElementRef = useRef(null)

    const [barData, setBarData] = useState([10,20,40,30,10])
    const rectWidth = 50;

    useEffect(()=>{

        const svg = d3.select(myElementRef.current)

        const allRectData = svg.selectAll('rect').data(barData)
        
        allRectData
            .attr("width", rectWidth)
            .attr("stroke-width",3)
            .attr("stroke-dasharray","5 5")
            .attr("stroke", "#8372A6")
            .attr("fill","pink")
            .attr("x", (d,i)=>{
                // console.log("meow ",{d},{i})
                return i* rectWidth
            })
            .attr("height", (d)=>{
                return d
            })


    })

    return (
        <div>
            <h3>E07 att style</h3>
            <svg ref={myElementRef}
                width={rectWidth * barData?.length}
                height={50}
                style={{border:"1px dashed"}}
            >
                <rect/>
                <rect/>
                <rect/>
                <rect/>
                <rect/>
            </svg>
        </div>
    )
}

export default E07attStyle