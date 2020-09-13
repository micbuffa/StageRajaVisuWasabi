import React, { useEffect, useState } from 'react';
import * as d3 from "d3";
import wasabicontext from "./json/wasabicontext.json"
import { cluster, schemeSet3, range, map } from 'd3';
import RotationValueForm from './RotationValueForm';

const TaskTree = (props) => {
    let testPromise = 0;

    let tree_layout;
    let tree_layoutDetail;

    let rootDetails;
    let svg;
    let detailSVG;
    let index = 0;
    let coordinateArray = [];
    let map = new Map();


    const [root, setRoot] = useState([]);
    const [partialContextArray, setPartialContextArray] = useState([]);

    /**
     * Variables for Context Area
     */

    const [contextTextType, setContextTextType] = useState("name");
    const [rotate, setRotate] = useState(180);
    const [circleAngle, setCircleAngle] = useState(180);
    const [radius, setRadius] = useState(200);
    const [clusterRotationValue, setClusterRotationValue] = useState(50);
    const [quantityNodeValue, setQuantityNodeValue] = useState(50);
    const [clusterRange, setClusterRange] = useState(0);
    const [childrenNumber, setChildrenNumber] = useState(50);
    const [rangeMap, setRangeMap] = useState(new Map());


    /**
     * Variables for Detail Area
     */
    const [detailTextType, setDetailTextType] = useState("name");
    const [detailRotate, setDetailRotate] = useState(180);
    const [detailCircleAngle, setDetailCircleAngle] = useState(180);
    const [detailRadius, setDetailRadius] = useState(200);


    const [dragValue, setDragValue] = useState(0);
    let test = 0

    const tooltipGap = 20;
    const customJson =
   [{"id":0,"type":"Artist","name":"Metallica","children":[{"id":3,"name":"Dave Mustaine","type":"producer"},{"id":4,"name":"Jon Zazula","type":"producer"},{"id":5,"name":"Lars Ulrich","type":"writer"},{"id":6,"name":"Diamond Head (band)","type":"producer"},{"id":7,"name":"Metallica","type":"producer"},{"id":8,"name":"Flemming Rasmussen","type":"producer"},{"id":9,"type":"writer"},{"id":11,"name":"Cliff Burton","type":"writer"},{"id":14,"name":"James Hetfield","type":"writer"},{"id":16,"name":"Bob Rock","type":"producer"},{"id":17,"name":"Mike Peden","type":"producer"},{"id":18,"name":"Michael Kamen","type":"producer"},{"id":22,"name":"Kirk Hammett","type":"writer"},{"id":24,"name":"Tony Cohen","type":"producer"},{"id":25,"name":"Blue Öyster Cult","type":"producer"},{"id":26,"name":"Sandy Pearlman","type":"writer"},{"id":27,"name":"Jerry Garcia","type":"writer"},{"id":28,"name":"Mark Whitaker (record producer)","type":"producer"},{"id":29,"name":"Al Kooper","type":"producer"},{"id":30,"name":"Budgie (band)","type":"producer"},{"id":31,"name":"Burke Shelley","type":"writer"},{"id":35,"name":"Rick Rubin","type":"producer"},{"id":36,"name":"Robert Trujillo","type":"writer"}]}]
    
        const dataRoot1 =[{"id":1,"type":"Artist","name":"Metallica","children":[{"id":2,"name":"Kill 'Em All","type":"Albums"},{"id":10,"name":"Ride The Lightning","type":"Albums"},{"id":12,"name":"Master Of Puppets","type":"Albums"},{"id":13,"name":"...And Justice For All","type":"Albums"},{"id":15,"name":"Metallica","type":"Albums"},{"id":19,"name":"Live Shit: Binge & Purge","type":"Albums"},{"id":20,"name":"Load","type":"Albums"},{"id":21,"name":"ReLoad","type":"Albums"},{"id":23,"name":"Garage Inc.","type":"Albums"},{"id":32,"name":"S&M","type":"Albums"},{"id":33,"name":"St. Anger","type":"Albums"},{"id":34,"name":"Death Magnetic","type":"Albums"},{"id":37,"name":"Lulu","type":"Albums"},{"id":38,"name":"Singles","type":"Albums"},{"id":39,"name":"Other Releases","type":"Albums"},{"id":40,"name":"Other Songs","type":"Albums"}]}]
    
        const dataRoot3 = [{"id":0,"type":"Producer","name":"","children":[{"id":1,"name":"Megadeth","type":"artist"},{"id":2,"name":"World Under Blood","type":"artist"},{"id":3,"name":"Arch Enemy","type":"artist"},{"id":4,"name":"Metallica","type":"artist"}]}]
        const dataRoot2=[{"id":0,"type":"Producer","name":"","children":[{"id":1,"name":"Metallica","type":"artist"}]}]
        const dataRoot5=[ {"id":0,"type":"Producer","name":"","children":[{"id":1,"name":"Metallica","type":"artist"},{"id":2,"name":"Apocalyptica","type":"artist"},{"id":3,"name":"Motörhead","type":"artist"},{"id":4,"name":"Paul Young","type":"artist"},{"id":5,"name":"Richard Cheese And Lounge Against The Machine","type":"artist"},{"id":6,"name":"Nickelback","type":"artist"},{"id":7,"name":"Bif Naked","type":"artist"},{"id":8,"name":"Declan Galbraith","type":"artist"},{"id":9,"name":"Lissie","type":"artist"},{"id":10,"name":"Hank Williams, Jr.","type":"artist"},{"id":11,"name":"Lynyrd Skynyrd","type":"artist"}]}]
   /* const customJson = [
        {
            id: 1,
            type: "Author",
            name: "Paul Reynolds",
            children: [
                {
                    id: 2,
                    type: "Author",
                    name: "Pando",
                    children: [
                        {
                            id: 6,
                            type: "IDK"
                        },
                        {
                            id: 7,
                            type: "Something"
                        }
                    ]
                },
                {
                    id: 3,
                    type: "Data",
                    name: "Kevin Rankin",
                    data: {
                        type: "something",
                        value: "value of data"
                    }
                },
                {
                    id: 4,
                    type: "Data",
                    name: "Gord",
                    data: {
                        type: "something",
                        value: "value of data"
                    }
                },
                {
                    id: 5,
                    type: "Author",
                    name: "Frank Maudsley",
                    children: [
                        {
                            id: 8,
                            type: "Author",
                            children: [
                                {
                                    id: 9,
                                    type: "???",
                                },
                                {
                                    id: 12,
                                    type: "Anything",
                                },
                                {
                                    id: 13,
                                    type: "Anything",
                                },
                                {
                                    id: 14,
                                    type: "Anything",
                                },
                                {
                                    id: 15,
                                    type: "???",
                                },
                                {
                                    id: 16,
                                    type: "???",
                                },
                                {
                                    id: 17,
                                    type: "???",
                                }
                            ]
                        },
                        {
                            id: 10,
                            type: "???",
                        },
                        {
                            id: 11,
                            type: "???",
                        }
                    ]
                }
            ]
        },
    ]

    const dataRoot1 = [
        {
            id: 1,
            type: "Author",
            name: "Albums",
            children: [
                {
                    id: 2,
                    name: "Ascension (2018)",
                    type: "Album",
                    children: [
                        {
                            id: 6,
                            type: "Music",
                            name: "I Ran",
                        },
                        {
                            id: 7,
                            type: "Music",
                            name: "Modern Love Is Automatic",
                        },
                        {
                            id: 8,
                            type: "Music",
                            name: "Telecommunication",
                        },
                        {
                            id: 9,
                            type: "Music",
                            name: "Space Age Love Song",
                        },
                        {
                            id: 10,
                            type: "Music",
                            name: "Ascension",
                        }
                    ]
                },
                {
                    id: 11,
                    name: "The Story of a Young Heart (1984)",
                    type: "Album",
                    children: [
                        {
                            id: 12,
                            type: "Music",
                            name: "Never Again",
                        },
                        {
                            id: 13,
                            type: "Music",
                            name: "The More You Live, the More You Love",
                        },
                        {
                            id: 14,
                            type: "Music",
                            name: "Remember David",
                        }
                    ]
                }
            ]
        }
    ]

    const dataRoot2 = [
        {
            id: 15,
            type: "Author",
            name: "Albums",
            children: [
                {
                    id: 16,
                    name: "A Flock of Seagulls (1982)",
                    type: "Author",
                    children: [
                        {
                            id: 17,
                            type: "Data",
                            name: "Standing in the Doorway",
                        },
                        {
                            id: 18,
                            type: "Data",
                            name: "Don't Ask Me",
                        },
                        {
                            id: 19,
                            type: "Author",
                            name: "Tokyo",
                        },
                        {
                            id: 20,
                            type: "Author",
                            name: "Man Made",
                        }
                    ]
                },
                {
                    id: 21,
                    name: "Listen (1983)",
                    type: "Author",
                    children: [
                        {
                            id: 22,
                            type: "Data",
                            name: "Nightmares",
                        },
                        {
                            id: 23,
                            type: "Data",
                            name: "Transfer Affection",
                        },
                        {
                            id: 24,
                            type: "Author",
                            name: "The Traveller",
                        }
                    ]
                }
            ]
        }
    ]

    const dataRoot3 = [{
        id: 23,
        type: "Author",
        children: [
            {
                id: 24,
                type: "Author",
                children: [
                    {
                        id: 25,
                        type: "Data"
                    }]
            },
            {
                id: 26,
                type: "Author",
            }]
    }]*/

    const buildTree = () => {
    }

    const openTooltip = (selectedNode) => {
        const coordinates = d3.mouse(document.getElementsByClassName("vertical_chart")[0])
        const x = coordinates[0] + tooltipGap;
        const y = coordinates[1] + tooltipGap;
        const tooltipContainer = d3.select(".tooltipContainer")
            .style("display", "block")
            .style("top", y + "px")
            .style("left", x + "px")

        tooltipContainer.selectAll("svg#tooltipSVG").remove()

        const toolTipSVG = tooltipContainer.append("svg")
            .attr("id", "tooltipSVG")

        toolTipSVG.append("text")
            .text(() => { return "Name : " + selectedNode.id })
            .attr("x", "0")
            .attr("y", "20")

        toolTipSVG.append("text")
            .text(() => { return "Number of children : " + `${selectedNode.children ? selectedNode.children.length : 0}` })
            .attr("x", "0")
            .attr("y", "40")

        toolTipSVG.append("text")
            .text(() => { return "Parent ID: " + `${selectedNode.parent ? selectedNode.parent.id : "None"}` })
            .attr("x", "0")
            .attr("y", "60")

        toolTipSVG.append("text")
            .text(() => { return "Name : " + `${selectedNode.name ? selectedNode.name : "None"}` })
            .attr("x", "0")
            .attr("y", "80")
    }

    const closeTooltip = (selectedNode) => {
        d3.select(".tooltipContainer").style("display", "none")
    }

    const openLegendTooltip = () => {
        d3.select(".legendTooltipSVG").style("display", "block")
    }

    const closeLegendTooltip = () => {
        d3.select(".legendTooltipSVG").style("display", "none")
    }


    const appendLegend = () => {

        let legendTooltipSVG = d3.select(".legendTooltip")
            .append("svg").attr("class", "legendTooltipSVG");

        legendTooltipSVG.append("circle")
            .attr("cx", 10)
            .attr("cy", 10)
            .style("fill", "#FF1B1C")
            .attr("r", 5)

        legendTooltipSVG.append("text")
            .attr("x", "20")
            .attr("y", "15")
            .text("Node root")

        legendTooltipSVG.append("circle")
            .attr("cx", 10)
            .attr("cy", 30)
            .style("fill", "#ACBFA4")
            .style("stroke", "black")
            .style("stroke-width", "3")
            .attr("r", 5)

        legendTooltipSVG.append("text")
            .attr("x", "20")
            .attr("y", "35")
            .text("Node with children")

        legendTooltipSVG.append("circle")
            .attr("cx", 10)
            .attr("cy", 50)
            .style("fill", "#ACBFA4")
            .attr("r", 5)



        legendTooltipSVG.append("text")
            .attr("x", "20")
            .attr("y", "55")
            .text("Node without child")
    }
    const updateRoot = (selectedNode) => {
        if (!selectedNode.parent) {
            return selectedNode
        }
        const parent = updateRoot(selectedNode.parent);

        parent.parent = selectedNode

        for (let i = 0; i < parent.children.length; i++) {
            if (parent.children[i].id === selectedNode.id) {
                parent.children.splice(i, 1);
            }
        }
        if (!selectedNode.children) {
            selectedNode.children = [];
        }

        selectedNode.children.push(parent)
        return selectedNode
    }

    /**
     * List of methods used to display elements of the vizualisation
     * Handles the creation process, the transitions and the exit.
     */

    const printEdges = (links, rootNode, linkMethod) => {
        // Appends paths 
        var linkEnter = svg
            .attr("fill", "none")
            .attr("stroke", "#555")
            .attr("stroke-width", 1.2)
            .selectAll("path")
            .data(links, function (d) {
                return d.target.id;
            });

        var links = linkEnter.enter()
            .append("path")
            .attr("d", linkMethod);
        // .attr("d", link);


        var linkExit = linkEnter.exit()
            .transition()
            .duration(1000)
            .attr("d", linkMethod({
                source: rootNode,
                target: rootNode
            }))
            .remove()

        var linkUpdate = linkEnter.transition()
            .duration(1000)
            .attr("d", linkMethod)
            .attr("transform", d => {
                // return `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`         // Complete radial tree 360°
                return `rotate(${rotate})`         // "Partial" radial tree with a part no filled with nodes ~45°
            })
    }

    const printNodes = (nodeEnter, rootNode) => {

        var nodes = nodeEnter.enter()
            .append("g")
            .attr("class", "nodes")
            .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
            .on("click", (d) => {
                if (d.parent) {
                    let tempPartialContextArray = updateRoot(d)
                    // setPartialContextArray(updateRoot(d))
                    delete tempPartialContextArray.parent;
                    setPartialContextArray(tempPartialContextArray)

                    // update(partialContextArray)
                }
            })
            .on("mouseover", openTooltip)
            .on("mouseout", closeTooltip);

        //Appends circles
        var node = nodes.append("circle")
            .attr("fill", d => d.children ? "#64F58D" : "#8D80AD")
            .attr("r", d => {
                if (d.depth > 3) {
                    return 0
                }
                return 10 - d.depth * 3
            })

        // Update node with their new position
        var nodeUpdate = nodeEnter.transition()
            .duration(500)
            .attr("transform", d => {
                return `rotate(${d.x * 180 / Math.PI - 90 + rotate}) translate(${d.y},0)`
                // return `rotate(${d.x * 180 / Math.PI}) translate(${d.y},0)`         // "Partial" radial tree with a part no filled with nodes ~45°
            })

        nodeUpdate.select("circle")
            .attr("fill", d => {
                if (!d.parent) {
                    return "#FF1B1C"
                }
                return "#ACBFA4"
            })
            .attr("class", d => d.children ? "parentNode" : "")
            .attr("r", d => {
                if (d.depth > 3) {
                    return 0
                }
                return 10 - d.depth * 3
            })

        // Remove nodes and apply transition
        var nodeExit = nodeEnter.exit()
            .transition()
            .attr("transform", (d) => {
                return "rotate(" + `${rootNode.x * 180 / Math.PI - 90}` + ") translate(" + rootNode.y + ")";
            })
            .duration(1000).remove()

        printText(nodes, nodeUpdate)
    }

    const printText = (nodes, nodeUpdate) => {
        var texts = nodes.append("text")
            .text(d => d.depth <= 2 ? d[contextTextType] : "")
            .attr("transform", d => `rotate(${180 - d.x / Math.PI * 180}) translate(0, ${-12 + d.depth * 3})`)

        nodeUpdate.select("text")
            .text(d => d.depth <= 2 ? d[contextTextType] : "")
            .attr("transform", d => {
                return `rotate(${-d.x / Math.PI * 180 - rotate + 90}) translate(0, ${-12 + d.depth * 3})`         // Text rotation for complete radial tree

                // return `rotate(${-d.x / Math.PI * 180 - rotate + 90}) translate(0, ${-12 + d.depth * 3})`         // Text rotation for complete radial tree
            })
    }


    const updateContext = (source) => {


        /**
        * 
        * Construction and update of the left part of the visualisation
        * The left part corresponds of the "Context Area" 
        * 
        * 
        */

        var nodes = tree_layout.nodes(partialContextArray)
        var links = tree_layout.links(nodes)

        var diagonal = d3.svg.diagonal.radial()
            .projection(function (d) {
                return [d.y, d.x]
            })

        // Appends nodes 
        var nodeEnter = svg.selectAll(".nodes")
            .data(nodes, function (d) {
                return d.id;
            });

        // var drag = d3.behavior.drag()
        //     .on("dragstart", dragsarted)
        //     .on("drag", dragged)
        //     .on("dragend", dragended)
        //     .origin((d) => d)

        // d3.select(".vertical_chart").call(drag);

        /**
         * Print edge and handle transition + exit behaviors
         */
        printEdges(links, source, diagonal)

        /**
         * Print nodes and handle transition + exit behaviors
         * Will trigger a method that displays the texts associated with each node
         */
        printNodes(nodeEnter, source)

        /**
         * 
         * Construction and update of the right part of the visualisation
         * The right part corresponds of the "Detail Area" 
         * in which we will display the data of the selected node in the "Context Area"
         * 
         * 
         */

        updateDetail(source);


    }

    const updateDetail = (source) => {

        var diagonal = d3.svg.diagonal.radial()
            .projection(function (d) {
                return [d.y, d.x]
            })
        var nodesDetail = tree_layoutDetail.nodes(rootDetails)


        switch (partialContextArray.id) {
            case 1:
                nodesDetail = tree_layoutDetail.nodes(dataRoot1[0]);
                break;
            case 2:
                nodesDetail = tree_layoutDetail.nodes(dataRoot2[0]);
                break;
            case 3:
                nodesDetail = tree_layoutDetail.nodes(dataRoot3[0]);
                break;

        }

        linksDetail = tree_layoutDetail.links(nodesDetail)

        // Appends paths 
        var linkEnterDetail = detailSVG
            .attr("fill", "none")
            .attr("stroke", "#555")
            .attr("stroke-width", 1.2)
            .selectAll("path")
            .data(linksDetail, function (d) {
                return d.target.id;
            });

        // Construction of paths. Starts at the root of the Context Area to perform a transition later.
        // Translate at -450 to fit with the translate/distance between the two areas
        var linksDetail = linkEnterDetail.enter()
            .append("path")
            .attr("d", (d) => {
                return diagonal({
                    source: partialContextArray,
                    target: partialContextArray
                })
            })
            .attr("transform", "translate(-450)");

        // Exit behaviour of the paths. From source to root of the Context Area
        var linkExitDetail = linkEnterDetail.exit()
            .transition()
            .duration(1000)
            .attr("d", (d) => {
                return diagonal({
                    source: source,
                    target: partialContextArray
                })
            })
            .attr("transform", "translate(-450,0)")
            .remove()

        // Transition behaviour of the paths depending of the data(links) values.
        // Translate set at 0 to "cancel" previous translate at -450 for the transition
        var linkUpdateDetail = linkEnterDetail.transition()
            .delay(1000)
            .duration(1000)
            .attr("d", diagonal)
            .attr("transform", "rotate(" + `${detailRotate - 180}` + ") translate(0)");

        // Appends nodes 
        var nodeEnterDetail = detailSVG.selectAll(".nodes")
            .data(nodesDetail, function (d) {
                return d.id;
            });

        // Nodes of Detail Area
        var nodesDetail = nodeEnterDetail.enter()
            .append("g")
            .attr("class", "nodes")
            .attr("transform", d => `translate(${partialContextArray.y - 450},0)`)
            .style("display", "none")
            .on("click", (d) => {
                if (d.parent) {
                    rootDetails = updateRoot(d)
                    delete rootDetails.parent;
                    updateDetail(rootDetails)
                }
            })
            .on("mouseover", openTooltip)
            .on("mouseout", closeTooltip);

        // Append text corresponding to nodes
        var textsDetail = nodesDetail.append("text")
            .text(d => d.depth <= 2 ? d.name : "")
            .attr("transform", d => `rotate(${180 - d.x / Math.PI * 180 - 90}) translate(0, ${-12 + d.depth * 3})`)


        //Appends circles
        var nodeDetail = nodesDetail.append("circle")
            .attr("fill", "#8D80AD")
            .attr("r", d => {
                if (d.depth > 3) {
                    return 0
                }
                return 10 - d.depth * 3
            })
            .attr("class", d => d.children ? "parentNode" : "");

        // Update node with their new position
        var nodeUpdateDetail = nodeEnterDetail.transition()
            .delay(1000)
            .duration(1000)
            .style("display", "block")
            .attr("transform", d => `
    rotate(${d.x * 180 / Math.PI + 90 + detailRotate}) translate(${d.y}, 0)`)


        nodeUpdateDetail.select("circle")
            .attr("fill", d => {
                if (!d.parent) {
                    return "#FF1B1C"
                }
                return "#ACBFA4"
            })
            .attr("r", d => {
                if (d.depth > 3) {
                    return 0
                }
                return 10 - d.depth * 3
            })
            .attr("class", d => d.children ? "parentNode" : "");

        nodeUpdateDetail.select("text")
            .text(d => d.depth <= 2 ? d[detailTextType] : "")
            .attr("transform", d => `rotate(${180 - d.x / Math.PI * 180 - detailRotate + 90}) translate(0, ${- 12 + d.depth * 3})`)

        // Remove nodes and apply transition
        var nodeExitDetail = nodeEnterDetail.exit()
            .transition()
            .attr("transform", (d) => {
                return " translate(" + `${partialContextArray.y - 450} ` + ")";
            })
            .duration(1000).remove()


        /**
        * 
        * Attempt to draw line between the two "subtrees" (Context Area and Detail Area)
        * 
        */

        d3.select(".contextArea").append("line")
            .attr("class", "linkBetweenAreas")
            .attr("stroke", "#555")

        d3.selectAll(".linkBetweenAreas")
            .transition()
            .duration(1000)
            .attr("x1", partialContextArray.x)
            .attr("x2", partialContextArray.x)
            .attr("y1", partialContextArray.y)
            .attr("y2", partialContextArray.y)
            .remove();

        d3.selectAll(".linkBetweenAreas")
            .transition()
            .delay(1000)
            .duration(1000)
            .attr("x1", partialContextArray.x)
            .attr("x2", rootDetails.x + 450)
            .attr("y1", partialContextArray.y)
            .attr("y2", rootDetails.y)
    }

    const increasePartialData = () => {
        setClusterRange(`${parseInt(clusterRange) + parseInt(clusterRotationValue)} `)
        map.set(partialContextArray.id, `${parseInt(clusterRange) + parseInt(clusterRotationValue)} `)
        setRangeMap(map)
    }

    const decreasePartialData = () => {
        setClusterRange(`${parseInt(clusterRange) - parseInt(clusterRotationValue)} `)
        map.set(partialContextArray.id, `${parseInt(clusterRange) - parseInt(clusterRotationValue)} `)
        setRangeMap(map)
    }

    const changeRotationValue = (event) => {
        const newValue = event.target.value
        if (newValue === "") {
            setClusterRotationValue(0);
        }
        if (!isNaN(newValue)) {
            setClusterRotationValue(newValue);
        }
    }

    const onQuantityNodeChange = (event) => {
        setQuantityNodeValue(event.target.value)
    }

    const onRadianChange = (event) => {
        const newAngle = event.target.value
        setCircleAngle(newAngle)
        setRotate(270 - newAngle / 2)
    }

    const onRadiusChange = (event) => {
        setRadius(event.target.value)

    }

    const onDetailRadianChange = (event) => {
        const newAngle = event.target.value
        setDetailCircleAngle(newAngle)
        setDetailRotate(270 - newAngle / 2)
    }

    const onDetailRadiusChange = (event) => {
        setDetailRadius(event.target.value)

    }

    const onContextTextChange = (event) => {
        setContextTextType(event.target.value)
    }

    const onDetailTextChange = (event) => {
        setDetailTextType(event.target.value)
    }


    /**
     * Entry point, setup the page with data and panels to construct visualisations
     */
    useEffect(() => {

        svg = d3.select("svg.vertical_chart")
            .append("g")
            .attr("class", "contextArea")
            .attr("transform", "translate(250,400)")

        detailSVG = d3.select("svg.vertical_chart")
            .append("g")
            .attr("class", "detailArea")
            .attr("transform", "translate(700,400)")

        appendLegend();

        d3.select(".legendIcon")
            .on("mouseover", openLegendTooltip)
            .on("mouseout", closeLegendTooltip)

        document.getElementById("rangeInput").value = circleAngle
        document.getElementById("radiusInput").value = radius
        document.getElementById("quantityNodeInput").value = radius

        document.getElementById("detailRangeInput").value = detailCircleAngle
        document.getElementById("detailRadiusInput").value = detailRadius
        // root = customJson[0];
        setRoot(wasabicontext[0]);
        setChildrenNumber(wasabicontext[0].children.length);
        setPartialContextArray(wasabicontext[0]);
    }, []);

    useEffect(() => {

        map = rangeMap;

        svg = d3.select(".contextArea")

        detailSVG = d3.select(".detailArea")

        tree_layout = d3.layout.tree()
            .size([Math.PI * circleAngle / 180, radius])
            .separation(function (a, b) { return (a.parent === b.parent ? 1 : 2) / a.depth })

        tree_layoutDetail = d3.layout.tree()
            .size([Math.PI * detailCircleAngle / 180, detailRadius])
            .separation(function (a, b) { return (a.parent === b.parent ? 1 : 2) / a.depth })



        rootDetails = dataRoot1[0];

        // Should use a Deep Copy of the data
        // partialContextArray = JSON.parse(JSON.stringify(wasabicontext[0]))


        if (partialContextArray._children && partialContextArray._children.length !== 0) {
            partialContextArray.children = partialContextArray._children.slice(rangeMap.get(partialContextArray.id), parseInt(rangeMap.get(partialContextArray.id)) + parseInt(quantityNodeValue));
        } else {
            partialContextArray._children = partialContextArray.children;
            map.set(partialContextArray.id, 0)
            setRangeMap(map);
        }
        try {
            setChildrenNumber(partialContextArray._children.length);
            partialContextArray.children = partialContextArray._children.slice(rangeMap.get(partialContextArray.id), parseInt(rangeMap.get(partialContextArray.id)) + parseInt(quantityNodeValue));
        } catch (error) {
        }


        updateContext(partialContextArray);

        // /**
        //  * 
        //  * Mouse down and mouseMove behavior to navigate between hidden node as if we were turning a wheel.
        //  */
        // d3.select(".vertical_chart").on("mousedown", function (event) {
        //     var w = d3.select(window)
        //         .on("mousemove", mousemove)
        //         .on("mouseup", mouseup);
        //     d3.event.preventDefault(); // disable text dragging
        //     let mouseDownPos = d3.mouse(document.getElementsByClassName("vertical_chart")[0])[0];
        //     let rotateNode = false
        //     function mousemove() {
        //         if ((d3.mouse(document.getElementsByClassName("vertical_chart")[0])[0] - mouseDownPos) / 30 > 1) {
        //             rotateNode = true;
        //             test += parseInt(clusterRotationValue)
        //             mouseDownPos = d3.mouse(document.getElementsByClassName("vertical_chart")[0])[0]
        //         }
        //         if ((d3.mouse(document.getElementsByClassName("vertical_chart")[0])[0] - mouseDownPos) / 30 < -1) {
        //             rotateNode = true;
        //             test -= parseInt(clusterRotationValue)
        //             mouseDownPos = d3.mouse(document.getElementsByClassName("vertical_chart")[0])[0]
        //         }
        //         if (rotateNode) {
        //             rotateNode = false
        //             partialContextArray.children = root.children.slice(test, parseInt(test) + parseInt(quantityNodeValue));
        //             update(partialContextArray);
        //         }
        //     }

        //     function mouseup() {
        //         w.on("mousemove", null).on("mouseup", null);
        //     }
        // })

    });
    return (
        <>
            <div className="test">
                <div className="mainDiv">
                    <div className="visualisationDiv">
                        <div className="tooltipContainer"></div>
                        <div className="legendContainer">
                            <i className="fa fa-info-circle legendIcon"></i>
                            <div className="legendTooltip"></div>
                        </div>
                        <svg className="vertical_chart" width="1200" height="800">

                            {/* <line className="linkBetweenAreas" x1="0" y1="0" x2="50" y2="50" stroke="#555"></line> */}

                        </svg>
                    </div>
                    <div>
                        <div className="treeParameters">
                            <h2>Context Area Configuration</h2>
                            <form>
                                <div>
                                    <input type="radio" id="contextTextName" name="text" value="name" onChange={(event) => onContextTextChange(event)}></input>
                                    <label htmlFor="contextTextName">Name</label>
                                </div>
                                <div>
                                    <input type="radio" id="contextTextId" name="text" value="id" onChange={(event) => onContextTextChange(event)}></input>
                                    <label htmlFor="contextTextId">ID</label>
                                </div>
                                <div>
                                    <p>Radian</p>
                                    <input id="rangeInput" type="range" name="radian" min="0" max="360" step="1" onChange={(event) => onRadianChange(event)}></input>
                                    <span className="radianValue">{circleAngle}</span>
                                </div>
                                <div>
                                    <p>Radius</p>
                                    <input id="radiusInput" type="range" name="radius" min="0" max="360" step="1" onChange={(event) => onRadiusChange(event)}></input>
                                    <span className="radiusValue">{radius}</span>
                                </div>
                                <div>
                                    <p>Number of nodes simultaneously displayed</p>
                                    <input id="quantityNodeInput" type="range" name="radius" min="0" max={childrenNumber} step="1" onChange={(event) => onQuantityNodeChange(event)}></input>
                                    <span className="radiusValue">{quantityNodeValue}</span>
                                </div>
                            </form>
                        </div>
                        <div className="treeParameters">
                            <h2>Detail Area Configuration</h2>
                            <form>
                                <div>
                                    <input type="radio" id="detailTextName" name="text" value="name" onChange={(event) => onDetailTextChange(event)}></input>
                                    <label htmlFor="detailTextName">Name</label>
                                </div>
                                <div>
                                    <input type="radio" id="detailTextId" name="text" value="id" onChange={(event) => onDetailTextChange(event)}></input>
                                    <label htmlFor="detailTextId">ID</label>
                                </div>
                                <div>
                                    <p>Radian</p>
                                    <input id="detailRangeInput" type="range" name="radian" min="0" max="360" step="1" onChange={(event) => onDetailRadianChange(event)}></input>
                                    <span className="radianValue">{detailCircleAngle}</span>
                                </div>
                                <div>
                                    <p>Radius</p>
                                    <input id="detailRadiusInput" type="range" name="radius" min="0" max="360" step="1" onChange={(event) => onDetailRadiusChange(event)}></input>
                                    <span className="radiusValue">{detailRadius}</span>
                                </div>
                                {/* <div>
                                <p>Number of nodes simultaneously displayed</p>
                                <input id="detailQuantityNodeInput" type="range" name="radius" min="0" max={childrenNumber} step="1" onChange={(event) => onQuantityNodeChange(event)}></input>
                                <span className="radiusValue">{quantityNodeValue}</span>
                            </div> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="customizationDiv">
                    <div className="navigationDiv" >
                        <button onClick={() => decreasePartialData()}> Previous {clusterRotationValue} nodes </button>
                        <input type="text" id="rotationValueInput" onChange={(newValue) => changeRotationValue(newValue)} value={clusterRotationValue} />
                        <button onClick={() => increasePartialData()}> Next {clusterRotationValue} nodes </button>
                    </div>
                </div>
                <div className="customizationInfoDiv">
                    <div>
                        <p>Currently viewing children interval : [{clusterRange}, {parseInt(clusterRange) + parseInt(quantityNodeValue)}] out of {childrenNumber} children</p>
                    </div>
                    <div>
                        <p>Number of nodes in depth 1 currently displayed : {quantityNodeValue}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskTree