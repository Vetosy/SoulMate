import ymaps from 'ymaps';

ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=5f264f26-e07e-4f77-a379-3b0fa55eb0ab&lang=ru_RU').then(maps => {
  const map = new maps.Map('map', {
    center: [55.026627398452774, 82.92078348585451],
    zoom: 18,
  });

  const placemark = new maps.Placemark([55.026627398452774, 82.92078348585451], {
    hintContent: 'Soulmate',
    balloonContentHeader: 'г.Новосибирск',
    balloonContentBody: 'ул. Красный проспект, 17',
    iconContent: 'Soulmate'
  }, {
    preset: 'islands#pinkStretchyIcon',
  });

  map.geoObjects.add(placemark);
});
