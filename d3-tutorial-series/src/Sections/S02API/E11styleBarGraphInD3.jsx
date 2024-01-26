import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const E11styleBarGraphInD3 = () => {
    const myElementRef = useRef(null)

    const [barData, setBarData] = useState([
        {
            name: 'John Doe',
            age: 24
        },
        {
            name: 'Will Smith',
            age: 50
        },
        {
            name: 'Jane Doe',
            age: 15
        },
        {
            name: 'Alice Doe',
            age: 90
        }
    ])

    //calculate the max age
    const maxAge = d3.max(barData, (d)=> d.age)

    const totalHeight = maxAge + 50;
    const rectWidth = 50;

    const margin = {
        top:20,
        right: 90,
        bottom: 100,
        left: 40
    }

    const yAxisLabelSpacing = 20


    useEffect(() => {

        const svg = d3.select(myElementRef.current)

        const allRectData = svg.selectAll("rect")
            .data(barData)
            .enter()
            .append("rect")
            // calculate x-position based on its index
            .attr("x", (d, i) => i * rectWidth + margin.left)
            // calculate y-position based on its index
            .attr("y", (d, i) =>  totalHeight- d.age + margin.top)
            // set height based on the bound datum
            .attr("height", (d) => d.age)
            // rest of attributes are constant values
            .attr("width", rectWidth)
            .attr('stroke-width', 2)
            .attr('stroke', '#38bcb2')
            .attr('fill', '#97e3d5');

        //draw x-axis line
        svg.append('line')
            .attr('x1',margin.left)
            .attr('y1',margin.top + totalHeight )
            .attr('x2', margin.left + (rectWidth*barData.length) + rectWidth/2)
            .attr('y2',margin.top + totalHeight )
            .attr('stroke', 'black')
            .attr('stroke-width',2)

        //draw y-axis line
        svg.append('line')
            .attr('x1', margin.left)
            .attr('y1', margin.top)
            .attr('x2', margin.left)
            .attr('y2', margin.top + totalHeight)
            .attr('stroke', 'black')
            .attr('stroke-width',2)

        //create x-axis labels (name)
        svg.selectAll('.name-label')
            .data(barData)
            .enter()
            .append('text')
            .text((d)=> d.name)
            .attr('class','name-label')
            .attr('x', (d,i)=> i*rectWidth + margin.left + 10)
            .attr('y', totalHeight + margin.top )
            .attr('transform', (d,i)=> `rotate(45 ${i*rectWidth + margin.left} ${totalHeight + margin.top + 20})`)
            .attr('fill', 'gray')

        //create y-axis labels (age)
        svg.selectAll('.age-label')
            .data(barData)
            .enter()
            .append('text')
            .text((d)=> d.age)
            .attr('class','age-label')
            .attr('x', (d,i)=> i*rectWidth + margin.left + rectWidth/2)
            .attr('y', (d)=> margin.top + totalHeight - d.age -5)
            .attr('fill', '#1F77B4')
            .attr('text-anchor', 'middle')
            .attr('font-weight', 'bold')

        //create y-axis labels - 20 value apart
        const yAxisLabelData = d3.range(0, maxAge + (yAxisLabelSpacing*2), yAxisLabelSpacing)

        const yAxisLabels = svg.selectAll('.y-axis-label')
                                .data(yAxisLabelData)
                                .enter()
                                .append('text')
                                .text((d)=> d)
                                .attr('x', margin.left - 5)
                                .attr('y', (d)=> margin.top + totalHeight - d)
                                .attr('fill', 'gray')
                                .attr('text-anchor', 'end')
                                .attr('alignment-baseline', 'middle')

        // console.log({allRectData})
    }, [barData]);

    return (
        <div>
            <h3>E11 style bar graph in d3</h3>
            <svg ref={myElementRef} height={totalHeight + margin.top + margin.bottom} style={{ border: '1px dashed' }}></svg>
        </div>
    );
};

export default E11styleBarGraphInD3;
