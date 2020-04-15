
var mydata;

function search(){
var name = document.getElementById("name").value;

d3.json("https://wasabi.i3s.unice.fr/search/artist/"+name, function(data) {
console.log(data);
mydata=data;


document.getElementById("aname").innerHTML=data.name;
document.getElementById("aimg").src =data.picture.big;
document.getElementById("slide").src =data.albums[0].cover.medium;
var txt="";
txt += "<table border='1'>"
for(i=0; i<data.albums[numero].songs.length;i++){
    txt += "<tr><td>"+ data.albums[numero].songs[i].title +"</td></tr>" ;

}

txt += "</table>"
document.getElementById("demo").innerHTML = txt;

});}

var numero = 0;


function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = mydata.albums.length - 1;
    if (numero > mydata.albums.length - 1)
        numero = 0;
    document.getElementById("slide").src = mydata.albums[numero].cover.medium;
    var txt="";
    txt += "<table border='1'>"
    for(i=0; i<mydata.albums[numero].songs.length;i++){
         txt += "<tr><td>"+ mydata.albums[numero].songs[i].title +"</td></tr>" ;

    }
    
    txt += "</table>"
    document.getElementById("demo").innerHTML = txt;
};