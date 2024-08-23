import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class BandsBandSongsRoute extends Route {
  // model() {
  //   let band = this.modelFor('bands.band');
  //   return band.songs;
  // }
  // setupController(controller) {
  //   super.setupController(...arguments);
  //   controller.set('band', this.modelFor('bands.band'));
  // }

  @service catalog;

  queryParams = {
    sortBy: {
      as: 's',
    },
  };

  async model() {
    let band = this.modelFor('bands.band');
    await this.catalog.fetchRelated(band, 'songs');
    return band;
  }

  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
