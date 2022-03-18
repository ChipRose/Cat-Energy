const Coordinates = {
  LAT: 59.938635,
  LNG: 30.323118,
  ZOOM: 20,
};

let PinSize = {
  PIN: {
    X: 47,
    Y: 53,
  },
  SHADOW: {
    X: 47,
    Y: 8,
  },
};

const WindowWidth = {
  TABLE: 768,
};

const windowInnerWidth = window.innerWidth;
if (windowInnerWidth > WindowWidth.TABLE) {
  PinSize = {
    PIN: {
      X: 113,
      Y: 106,
    },
    SHADOW: {
      X: 90,
      Y: 18,
    },
  };
}


const mapCanvas = document.querySelector('.address__map-block');
mapCanvas.innerHTML = '';
mapCanvas.innerHTML = '<div id="map-inner" style="width: 100%; height: 100%;"></div>';

const map = L.map('map-inner').setView([Coordinates.LAT, Coordinates.LNG], Coordinates.ZOOM);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
  .addTo(map);

const mapIcon = L.icon({
  iconUrl: '../img/icons/map-pin.svg',
  shadowUrl: '../img/background/pin-shadow-tablet.png',

  iconSize: [PinSize.PIN.X, PinSize.PIN.Y],
  shadowSize: [PinSize.SHADOW.X, PinSize.SHADOW.Y],
  iconAnchor: [PinSize.PIN.X / 2, PinSize.PIN.Y],
  shadowAnchor: [PinSize.SHADOW.X / 2, PinSize.SHADOW.Y],
});

const marker = L.marker({
  lat: Coordinates.LAT,
  lng: Coordinates.LNG,
},
  {
    draggable: false,
    icon: mapIcon,
  },
);

marker.addTo(map);
