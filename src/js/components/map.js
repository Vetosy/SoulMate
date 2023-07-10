const center = [55.02662761597713, 82.9207828920306];

function init() {
  const map = new ymaps.Map('map', {
    center: center,
    zoom: 18,
  });

  const placemark = new ymaps.Placemark(center, {
    hintContent: 'SoulMate',
    balloonContentHeader: 'г.Новосибирск',
    balloonContentBody: 'ул. Красный проспект, 17',
    balloonContentFooter: '8 906-907-64-58',
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/marker.svg',
    iconImageSize: [80, 80],
    iconImageOffset: [-40, -80],
  });

  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark);
}

document.addEventListener('DOMContentLoaded', () => {
  ymaps.ready(init);
});
