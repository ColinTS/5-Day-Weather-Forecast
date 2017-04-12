 /*jshint esversion: 6*/
console.log('app.js connected');

//Outgoing request function
function request(url, listener){
  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', listener);
  oReq.open('GET' , url);
  oReq.send();
}


document.querySelector('#showWeather').addEventListener('click', () => {
  const input = document.querySelector('#resourceId');

  //clears container each click
  container.innerHTML = '';

  request(`http://api.openweathermap.org/data/2.5/forecast?q=${input.value},850&appid=fcbb9adedcc796792c670f955ff5b3ee`, test );
});

function test(){
  const requestData = JSON.parse(this.responseText);
  console.log('request data: ', requestData);

  for(let i = 0; i < requestData.list.length - 35; i++){
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'contentDiv');
    let div = document.querySelector("#div");

    let theWeather = document.createElement('h1');

    let theIcon = document.createElement('img');
    theIcon.setAttribute('src', `http://openweathermap.org/img/w/${requestData.list[i].weather[0].icon}.png`);

    theWeather.innerHTML = requestData.list[i].weather[0].description;
    container.appendChild(contentDiv);
    contentDiv.appendChild(theIcon);
    contentDiv.appendChild(theWeather);
  }
}

const container = document.querySelector("#contentContainer");


