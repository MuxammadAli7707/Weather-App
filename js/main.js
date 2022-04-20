const body = document.getElementById('body');
const elForm = document.getElementById('form');
const elInput = document.getElementById('input');
const elListBox = document.getElementById('listbox');

let api = '0400b796d3acd1ee1c6f3301a977c52f'
let url = 'https://api.openweathermap.org/data/2.5/'
let city = 'Tashkent';

function createElements(...array) {
  return array.map(el => {
    return document.createElement(el)
  })
}

window.addEventListener('load', looader);

function looader() {
  fetch(`${url}weather?q=${city}&units=metric&APPID=${api}`)
  .then((res) => res.json())
  .then(display)
}

elForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let city = elInput.value
  fetch(`${url}weather?q=${city}&units=metric&APPID=${api}`)
  .then((res) => res.json())
  .then(display)

  elInput.value = ''
  elListBox.innerHTML = "";
})

function display(data){
  console.log(data)
  let [error, pcity, ptemp, pcloud, phum, pwind] = createElements('p', 'p', 'p', 'p', 'p', 'p');  

  if(data.cod == '404') {
    alert("Sorry this country is not found");
    elListBox.appendChild(error);
  } else {
    let cloud = data.weather[0].main;
    pcity.className = 'weather__city';
    ptemp.className = 'weather__temp';
    pcloud.className = 'weather__sunny';
    phum.className = 'weather__humidity';
    pwind.className = 'weather__wind';

  if(cloud == 'Clouds') {
    body.style.backgroundImage = 'url(https://www.depo.ua/uploads/174513/conversions/a7cd30531b52dc40275fb1c503488d96-wide-big.jpg)';
  }

  if(cloud == 'Haze') {
    body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGXHufCWSoVbbNg1B_l4UnuheMehY9SabDYRBts0b98zXhUT2Ju_pN9YzO_LGquf8RP8&usqp=CAU)';
  }
  if(cloud == 'Sunny') {
    body.style.backgroundImage = 'url(https://www.gannett-cdn.com/-mm-/a0a28bd666af6d80b33247a358069ae6b7ce0cc4/c=0-108-2121-1306/local/-/media/2016/08/17/PAGroup/YorkDailyRecord/636070138268132665-ThinkstockPhotos-491701259.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp)'

  }
  if(cloud == 'Rain') {
    body.style.backgroundImage = 'url(https://content.api.news/v3/images/bin/e76612d66681acfed714c2b3342c0e7a)'

  }

  if(cloud == 'Drizzle') {
    body.style.backgroundImage = 'url(https://content.api.news/v3/images/bin/e76612d66681acfed714c2b3342c0e7a)'
  }
  if(cloud == 'Mist') {
    body.style.backgroundImage = 'url( https://i2-prod.mirror.co.uk/incoming/article9534551.ece/ALTERNATES/s615b/Foggy-weather.jpg)'

  }

  if(cloud == 'Snow') {
    body.style.backgroundImage = 'url(https://c4.wallpaperflare.com/wallpaper/480/398/332/lamp-post-snow-winter-wallpaper-preview.jpg)'
  }

  if(cloud == 'Clear') {
    body.style.backgroundImage = 'url(https://iresizer.devops.arabiaweather.com/resize?url=https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/IMG-20201210-WA0008.jpg&size=850x478&force_jpg=1)'
  }

  if(cloud == 'Fog') {
    body.style.backgroundImage = 'url(https://www.summerlandreview.com/wp-content/uploads/2019/08/18244523_web1_Fog-copy.jpg)'
  }

  pcity.textContent = `${data.name}`
  ptemp.textContent = `${Math.floor(data.main.temp)}°C`
  pcloud.textContent = `${data.weather[0].main}`
  phum.textContent = `Humidity: ${data.main.humidity}%`
  pwind.textContent = `Wind Speed: ${Math.floor(data.wind.speed)} km/h`

  elListBox.appendChild(pcity)
  elListBox.appendChild(ptemp)
  elListBox.appendChild(pcloud)
  elListBox.appendChild(phum)
  elListBox.appendChild(pwind)
  }
}