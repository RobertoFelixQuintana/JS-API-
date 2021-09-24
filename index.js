function Leer() {
    const city = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='16d3374be7d74982724102c96d08327a';
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    buscar1(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);
            
            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("lista").innerHTML=`<h1>Clima de ${document.getElementById("input").value.toUpperCase()}: </h1><br>
            <dl><b><u>Datos</u></b> 
            <dt>Temperatura max  </dt>
            <dd>${resultado.main.temp_max}</dd>
            <dt>Tempertura min  </dt>
            <dd> ${resultado.main.temp_min}</dd>
            <dt>Humedad   </dt>
            <dd>${resultado.main.humidity}</dd>
            <dt>Presion  </dt>
            <dd> ${resultado.main.pressure}</dd>
            </dl>`;
            

            Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                         <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            </div>`;
            })
      });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(respuesta.data);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}   

