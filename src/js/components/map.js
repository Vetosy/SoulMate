const center = [55.02662761597713, 82.9207828920306]

function init() {
  const map = new ymaps.Map('map', {
    center: center,
    zoom: 18,
  })

  const placemark = new ymaps.Placemark(center, {

    balloonContentHeader: 'г.Новосибирск',
    balloonContentBody: 'ул. Красный проспект, 17',
    balloonContentFooter: '8 906-907-64-58',
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/marker.svg',
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40],
  })

  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark)
}

ymaps.ready(init);
