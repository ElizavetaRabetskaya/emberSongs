import EmberRouter from '@ember/routing/router';
import config from 'rarwe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}
// Здесь :band_id является динамическим сегментом URL.
// Это значит, что при переходе к такому URL,
//  как /bands/1, значение 1 будет передано в маршрут как часть params.

// model For - это действительно отличный метод, который
// извлекает модель родительского маршрута, который уже был
// активирован.

// полный переход "сверху вниз"
// запускается только при начальной загрузке приложения.
Router.map(function () {
  this.route('bands', function () {
    this.route('band', { path: ':id' }, function () {
      this.route('songs');
    });
    this.route('new');
  });
});
