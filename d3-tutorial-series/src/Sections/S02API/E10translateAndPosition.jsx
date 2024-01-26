import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const E10translateAndPosition = () => {
    const svgRefBox = useRef();

    const boardDimension = 300
    const boxDimension = 100

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    //only for translate
    useEffect(() => {
        // console.log("meow calling translate ",{x},{y})
        const svgBox = d3.select(svgRefBox.current)

        svgBox.select("rect")
            .attr("transform", `translate(${x},${y})`)

    }, [x, y])

    //svg attributes
    useEffect(() => {
        const svgBox = d3.select(svgRefBox.current)

        //svg moving box
        svgBox.select("rect")
            .attr("fill", "#63BBF2")

        //draw border
        svgBox
            .append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", boardDimension)
            .attr("height", boardDimension)
            .attr("fill", "none")
            .attr("stroke", "#526FAD")
            .attr("stroke-width", 4)

        //draw vertical lines
        svgBox
            .append("line")
            .attr("x1", 100)
            .attr("y1", 0)
            .attr("x2", 100)
            .attr("y2", boardDimension)
            .attr("stroke", "#526FAD")
            .attr("stroke-width", 3)

        svgBox
            .append("line")
            .attr("x1", 200)
            .attr("y1", 0)
            .attr("x2", 200)
            .attr("y2", boardDimension)
            .attr("stroke", "#526FAD")
            .attr("stroke-width", 3)

        //draw horizontal lines
        svgBox
            .append("line")
            .attr("x1", 0)
            .attr("y1", 100)
            .attr("x2", boardDimension)
            .attr("y2", 100)
            .attr("stroke", "#526FAD")
            .attr("stroke-width", 3)

        svgBox
            .append("line")
            .attr("x1", 0)
            .attr("y1", 200)
            .attr("x2", boardDimension)
            .attr("y2", 200)
            .attr("stroke", "#526FAD")
            .attr("stroke-width", 3)

    }, [])

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width:"fit-content",
            }}
        >
            <div style={{
                width: "100%",
            }}>
                <h3>E10 translate and position</h3>
            </div>

            {/*svg board*/}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    width: `${boardDimension}px`,
                    height: `${boardDimension}px`,
                    backgroundColor: "white",
                }}
            >
                <svg
                    ref={svgRefBox}
                    width={boardDimension}
                    height={boardDimension}
                >
                    <rect x={0} y={0} width={boxDimension} height={boxDimension} />
                </svg>
            </div>

            {/*sliders */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "200px",
                    width: "fix-content",
                }}
            >
                {/*y slider*/}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100px",
                        height: "100%",
                    }}
                >
                    <label
                        htmlFor="y-axis"
                        style={{
                            fontWeight: "600",
                            fontSize: "20px",
                            color: "#526FAD",
                            margin: "0",
                            padding: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "right",
                        }}
                    >
                        Y Axis:
                    </label>
                    <input
                        type="range"
                        id="y-axis"
                        min={0}
                        max={boardDimension - boxDimension}
                        value={y}
                        onChange={(e) => setY(e.target.value)}
                        style={{
                            transform: "rotate(-270deg)",
                            width: "200px",
                        }}
                    />
                </div>

                {/*x slider*/}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        width: "200px",
                        height: "100%",
                        marginLeft: "125px",
                        marginTop: "15px",
                    }}
                >
                    <label
                        htmlFor="x-axis"
                        style={{
                            fontWeight: "600",
                            fontSize: "20px",
                            color: "#526FAD",
                            margin: "0",
                            padding: "0",
                        }}
                    >
                        X Axis:
                    </label>
                    <input
                        type="range"
                        id="x-axis"
                        min={0}
                        max={boardDimension - boxDimension}
                        value={x}
                        onChange={(e) => setX(e.target.value)}
                    />
                </div>

            </div>

            {/*show position*/}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "20px",
                    }}
                >
                    <label
                        htmlFor="x-axis"
                        style={{ fontWeight: "700", fontSize: "30px", color: "#526FAD" }}
                    >
                        {`transform= translate(${x},${y})`}
                    </label>
                </div>
            </div>


        </div>
    );
};

export default E10translateAndPosition;
