
var data=[];


function add(){
var name = document.getElementById("li").value;
d3.json("https://wasabi.i3s.unice.fr/search/artist/"+name, function(mydata) {
data.push(mydata);


var txt="";

txt += '<table class="table"' +'>'+
'<thead class="thead-dark"'+'>'+
  '<tr>'+
    '<th scope="col">Artists</th>'+ 
    '</thead>'+
    '<tbody>';

for(i=0; i<data.length;i++){
    txt += "<tr><td>"+ data[i].name +"</td></tr>" ;
}

txt += '</tbody>'+
'</table>';

document.getElementById("demo").innerHTML = txt;
if(data.length>1){

  document.getElementById("demo1").innerHTML ='<button onClick="'+'comparing();'+'">COMPARING</button>'; 

}});

}


function comparing(){
  
  document.getElementById("my_dataviz").innerHTML ="<span>Number of Deezer Fans</span>";

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 100},
    width = 360 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 5000000])
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

// Y axis
var y = d3.scaleBand()
  .range([ 0, height ])
  .domain(data.map(function(d) { return d.name; }))
  .padding(1);
svg.append("g")
  .call(d3.axisLeft(y))


// Lines
svg.selectAll("myline")
  .data(data)
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(d.deezerFans); })
    .attr("x2", x(0))
    .attr("y1", function(d) { return y(d.name); })
    .attr("y2", function(d) { return y(d.name); })
    .attr("stroke", "grey")

// Circles
svg.selectAll("mycircle")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(d.deezerFans); })
    .attr("cy", function(d) { return y(d.name); })
    .attr("r", "4")
    .style("fill", "#69b3a2")
    .attr("stroke", "black")

    document.getElementById("my_data").innerHTML ="<span>Number of Albums</span>";



// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 100},
    width = 360 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


// append the svg object to the body of the page
var svg = d3.select("#my_data")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.name; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 10])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.name); })
    .attr("y", function(d) { return y(d.albums.length); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.albums.length); })
    .attr("fill", "#69b3a2")




}

