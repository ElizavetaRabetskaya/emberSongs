import EmberRouter from '@ember/routing/router';
import config from 'rarwe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  constructor() {
    super(...arguments);

    this.on('routeDidChange', () => {
      const queryParams = new URLSearchParams(window.location.search);
      const path = queryParams.get('path');

      if (path) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );

        this.transitionTo(path.replace(config.rootURL, ''));
      }
    });
  }
}
// Здесь :band_id является динамическим сегментом URL.
// Это значит, что при переходе к такому URL,
//  как /bands/1, значение 1 будет передано в маршрут как часть params.

// model For - извлекает модель родительского маршрута, который уже был
// активирован.

// полный переход "сверху вниз"
// запускается только при начальной загрузке приложения.
Router.map(function () {
  this.route('bands', { path: '/' }, function () {
    this.route('band', { path: 'bands/:id' }, function () {
      this.route('songs');
      this.route('details');
    });
    this.route('new', { path: 'bands/new' });
  });
  this.route('not-found', { path: '/*path' });
});
