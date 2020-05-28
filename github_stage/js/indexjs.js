
function Update(){

d3.json("https://wasabi.i3s.unice.fr/api/v1/artist/count/album?skip=0&limit=5", function(myData) {
console.log(myData.results);

var barWidth = 400;
 var barScale = d3.scaleLinear().domain([0, 100]).range([0, barWidth]);
 
 var u = d3.select('#wrapper')
   .selectAll('.person')
   .data(myData);


 var entering = u.enter()
   .append('div')
   .classed('person', true);


 
 entering.append('span')
   .classed('label', true)
   .text(function(d) {
     return d.name;
   });

 entering.append('div')
   .classed('bar', true)
   .style('width', function(d) {
     return d.sum + 'px';
   });

});
  
 }

 function Update2(){

 var w = 500,                        //width
 h = 500,                            //height
 r = 200,                            //radius
 color = d3.scale.category20c();     //builtin range of colors


 
 d3.json("https://wasabi.i3s.unice.fr/api/v1/artist/genres/popularity?skip=0&limit=4", function(data) {
  // data = [{"_id":"Folk","sum":961},{"_id":"Alternative Rock","sum":921},{"_id":"Singer-Songwriter","sum":886},{"_id":"Hip Hop","sum":809},{"_id":"Indie Rock","sum":752},{"_id":"Electronic","sum":726},{"_id":"Blues","sum":679},{"_id":"Heavy Metal","sum":656},{"_id":"R&B","sum":625},{"_id":"Jazz","sum":546},{"_id":"Pop Rock","sum":543},{"_id":"Country","sum":534},{"_id":"Hard Rock","sum":533},{"_id":"Punk Rock","sum":478},{"_id":"Soul","sum":420},{"_id":"Indie Pop","sum":388},{"_id":"Progressive Rock","sum":371},{"_id":"Folk Rock","sum":354},{"_id":"Industrial","sum":340},{"_id":"Gospel","sum":312}];
 var vis = d3.select("body")
     .append("svg:svg")              //create the SVG element inside the <body>
     .data([data])                   //associate our data with the document
         .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
         .attr("height", h)
     .append("svg:g")                //make a group to hold our pie chart
         .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

 var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
     .outerRadius(r);

 var pie = d3.layout.pie()           //this will create arc data for us given a list of values
     .value(function(d) { return d.sum; });    //we must tell it out to access the value of each element in our data array

 var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
     .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
     .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
         .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
             .attr("class", "slice");    //allow us to style things in the slices (like text)

     arcs.append("svg:path")
             .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
             .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

     arcs.append("svg:text")                                     //add a label to each slice
             .attr("transform", function(d) {                    //set the label's origin to the center of the arc
             //we have to make sure to set these before calling arc.centroid
             d.innerRadius = 0;
             d.outerRadius = r;
             return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
         })
         .attr("text-anchor", "middle")                          //center the text on it's origin
         .text(function(d, i) { return data[i]._id; });        //get the label from our original data array
        });

 }

