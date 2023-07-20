async function getMatchData(){
   
    
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=600340b1-e938-440c-892d-6758121a5083&offset=0")
    .then(data => data.json())
     .then(data=>{
        if (data.status!="success")return ;
            
        const matchesList= data.data;
        if (!matchesList) return [];

        const relevantData = matchesList.filter(match =>match.series_id=="9f28aff0-f52d-49f5-89e4-270438d8f1db").map( match =>`${match.name}, ${match.status}`);
        console.log({relevantData});
         
        
document.getElementById("matches").innerHTML=relevantData.map(match => `<li>${match} </li>`).join('');
 
return relevantData;

     })

     .catch(e =>console.log(e));

     
}
getMatchData();