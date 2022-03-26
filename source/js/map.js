const WINDOW_LIMIT = 768;

const MobilePinSize = {
  PIN: {
    X: 47,
    Y: 53,
  },
  SHADOW: {
    X: 47,
    Y: 8,
  },
};

const TabletPinSize = {
  PIN: {
    X: 113,
    Y: 106,
  },
  SHADOW: {
    X: 90,
    Y: 18,
  },
};

const Coordinates = {
  LAT: 59.938635,
  LNG: 30.323118,
  ZOOM: 20,
};

const mapCanvas = document.querySelector('.address__map-block');

const isChangePinSize = () => {
  return window.innerWidth >= WINDOW_LIMIT ? true : false;
};

isChangePinSize()? setMap(TabletPinSize): setMap(MobilePinSize);

function setMap(iconsSizes) {
  let { PIN, SHADOW } = iconsSizes;
  mapCanvas.innerHTML = '';
  mapCanvas.innerHTML = '<div id="map-inner" style="width: 100%; height: 100%;"></div>';

  const map = L.map('map-inner', {
    scrollWheelZoom: false,
  })
    .setView([Coordinates.LAT, Coordinates.LNG], Coordinates.ZOOM);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })
    .addTo(map);

  const mapIcon = L.icon({
    iconUrl: 'img/icons/map-pin.svg',
    shadowUrl: 'img/background/pin-shadow-tablet.png',

    iconSize: [PIN.X, PIN.Y],
    shadowSize: [SHADOW.X, SHADOW.Y],
    iconAnchor: [PIN.X / 2, PIN.Y],
    shadowAnchor: [SHADOW.X / 2, SHADOW.Y],
  });

  const marker = L.marker({
    lat: Coordinates.LAT,
    lng: Coordinates.LNG,
  },
    {
      draggable: false,
      icon: mapIcon,
    }
  );

  marker.addTo(map);
};

window.addEventListener('resize', () => {
  let PinSize = MobilePinSize;
  if (isChangePinSize()) {
    PinSize = TabletPinSize;
  }

  setMap(PinSize);
});
