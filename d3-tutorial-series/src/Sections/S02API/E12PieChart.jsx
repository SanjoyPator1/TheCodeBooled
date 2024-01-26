import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const E12PieChart = () => {
  const myElementRef = useRef(null);
  const radius = 150;
  const totalWidth = radius * 2;

  // Create dummy data as an array of objects with 'label' and 'value' properties
  const [pieData, setPieData] = useState([
    { label: 'A', value: 20 },
    { label: 'B', value: 30 },
    { label: 'C', value: 40 },
    { label: 'D', value: 30 },
    { label: 'E', value: 35 },
  ]);

  useEffect(() => {
    const svg = d3.select(myElementRef.current);

    // Array of colors to directly assign to pie slices
    const color = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'];

    const pie= d3.pie().value((d)=> d.value);
    const dataReady = pie(pieData)
    // console.log({dataReady})

    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius)

    svg
      .selectAll('.mySlices')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', (d,i)=> color[i])
      .attr('stroke', 'black')
      .attr('stroke-width', '2px')
      .attr('opacity', 0.5)
      .attr('transform', `translate(${radius},${radius})`)

    //draw labels
    svg
      .selectAll('.mySlices')
      .data(dataReady)
      .enter()
      .append('text')
      .text((d)=> d.data.label + ' : '+ d.data.value)
      .attr('text-anchor', 'middle')
      .attr('font-size',17)
      .attr('transform', (d)=> `translate(${arcGenerator.centroid(d)}) translate(${radius},${radius}) `)
    
  }, [pieData]);

  return (
    <div>
      <h3>E12 Pie Chart</h3>
      <svg
        ref={myElementRef}
        width={totalWidth}
        height={totalWidth}
        style={{ border: '1px dashed' }}
      ></svg>
    </div>
  );
};

export default E12PieChart;
