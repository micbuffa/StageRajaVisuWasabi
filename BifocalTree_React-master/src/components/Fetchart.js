import React from 'react';
import { useEffect, useState } from 'react';
import TaskTree from './TaskTree';



const Fetchart = (props) => {
 
 
  const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
     // console.log(name)
      fetchDataArt(name);
  }



    const fetchDataArt = async (Artistname) => {
        let url = new URL("https://wasabi.i3s.unice.fr/api/v1/artist_all/name/"+Artistname);
        const response = await fetch(url);
        const responseJson = await response.json();
        //return responseJson;
        var obj=responseJson;
        
        var a=0;
        console.log(Artistname);
        console.log("heello");
       // var nodes=[];
    
    
        var nodep=new Object();
        var nodea=new Object();
    
        nodep.id=a++;
        nodep.type="Artist"
        nodep.name="Metallica";
    
        nodea.id=a++;
        nodea.type="Artist"
        nodea.name="Metallica";
    
        var children=[];
        var childrenA=[];
        
        
        
      
            for(var j=0;j<(obj.albums).length;j++){
                var childa=new Object();
                          
                          childa.id=a++;
                          childa.name=obj.albums[j].title;
                          childa.type="Albums";
    
                          childrenA.push(childa);
    
            for(var k=0;k<(obj.albums[j].songs).length;k++){
                
        
    
            if(obj.albums[j].songs[k].hasOwnProperty("producer")){
    
             for(var p=0;p<(obj.albums[j].songs[k].producer).length;p++){
                    var pr=0;
                    for(var o=0;o<children.length;o++){
                            if(obj.albums[j].songs[k].producer[p]==children[o].name){
                                    pr++;
                            }
    
                    }
                    if(pr==0){
    
                        var child=new Object();
                        
                        
                        child.id=a++;
                        child.name=obj.albums[j].songs[k].producer[p];
                        child.type="producer";
    
                        children.push(child);
                                
                         }
                        
             }
    
            }
            if(obj.albums[j].songs[k].hasOwnProperty("writer")){
    
             for(var t=0;t<(obj.albums[j].songs[k].writer).length;t++){
                var wr=0;
                    for(var m=0;m<children.length;m++){
                            if(obj.albums[j].songs[k].writer[p]==children[m].name){
                                    wr++;
                            }
    
                    }
                    if(wr==0){
    
                        var child=new Object();
            
                        
                        child.id=a++;
                        child.name=obj.albums[j].songs[k].writer[p];
                        child.type="writer";
    
                        children.push(child);
    
           
                    }
                 
             }
            }
         
         }}
        
       
    nodep.children=children;
    nodea.children=childrenA;
       
       /*   document.getElementById("json").innerHTML=JSON.stringify(nodep);
          document.getElementById("json2").innerHTML=JSON.stringify(nodea);*/
       var dataRoot1=[];
        const nodeaa=JSON.stringify(nodea);
        dataRoot1.push(nodeaa);
        console.log("resultat  "+nodeaa);

       if(dataRoot1!==[]){
          console.log("heeeey");
          return(
             // <TaskTree res={dataRoot1}></TaskTree>
             <input type="text"
             value={name}/>

          );

        }
        else{
          console.log("viide");
        }
          
    }
    
   
   
   
    return (
      <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>

    );

  }

  export default Fetchart