async function fetchData(){
  const apiKey="00fd49e0c84dd3196a19c57ba81d9d8b"
  async function handleName(event){
    const city=searchCity.value;
    const response= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
   .then(response=>response.json())
   .then(async data=>{
   const lon = data?.coord?.lon;
   const lat = data?.coord?.lat;
   await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
   .then(response=>response.json())
   
   .then(data2=>{
      //city name//
   cityName.innerHTML=`${data2?.name}`
   //city name//
   //date//
   const date=new Date();
   const year =date.getDate()
   const month=date.getUTCMonth()+1
   const day=date.getUTCFullYear()
   dateCity.innerHTML=`${year} ${month} ${day}`
   //date//
   //temp-weather//
   const weatherType=data2?.weather[0]?.main;
   console.log(weatherType)
   mainWeather.innerHTML=`${weatherType}`
   //temp-weather//
   //temperature//
   const temp=Math.floor((data2?.main.temp)-273);
  temperature.innerHTML=`${temp}` 
   // temperature.appendChild(temperatureP)
   //temperature//
   }
   )

   })

  }
   searchButton.addEventListener("click",handleName)

 


}
