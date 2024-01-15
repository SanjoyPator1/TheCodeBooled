import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

const E09createDomElementsFromData = () => {

    const myElementRef = useRef(null)

    const [barData, setBarData] = useState([10, 20, 40, 30, 10])
    const rectWidth = 50;
    const totalHeight = 100;

    useEffect(() => {

        const svg = d3.select(myElementRef.current)

        const allRectData = svg.selectAll("rect")
            .data(barData)
            .enter()
            .append("rect")
            // calculate x-position based on its index
            .attr("x", (d, i) => i * rectWidth)
            // calculate y-position based on its index
            .attr("y", (d, i) => 100 - d)
            // set height based on the bound datum
            .attr("height", (d) => d)
            // rest of attributes are constant values
            .attr("width", rectWidth)
            .attr("stroke-width", 3)
            .attr("stroke-dasharray", "5 5")
            .attr("stroke", "#BDB0D9")
            .attr("fill", "pink");

        // console.log({allRectData})
            

    })

    return (
        <div>
            <h3>E09 create DOM Elements From Data</h3>
            <svg ref={myElementRef}
                width={rectWidth * barData?.length}
                height={totalHeight}
                style={{ border: "1px dashed" }}
            >

            </svg>
        </div>
    )
}

export default E09createDomElementsFromData