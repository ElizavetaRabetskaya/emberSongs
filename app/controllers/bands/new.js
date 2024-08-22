import Controller from '@ember/controller';
import { action } from '@ember/object';
// import { dasherize } from '@ember/string';
import { tracked } from '@glimmer/tracking';
// import { Band } from 'rarwe/routes/bands';
// import Band from 'rarwe/models/band';
import { service } from '@ember/service';
//import fetch from 'fetch';

export default class BandsNewController extends Controller {
  @service catalog;
  @service router;

  @tracked name;
  get hasNoName() {
    return !this.name;
  }
  @action
  updateName(event) {
    this.name = event.target.value;
  }
  // @action
  // saveBand() {
  //   let band = new Band({ name: this.name, id: dasherize(this.name) });
  //   this.catalog.add('band', band);
  //   this.router.transitionTo('bands.band.songs', band.id);
  // }
  @action
  async saveBand() {
    // let response = await fetch('/bands', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/vnd.api+json',
    //   },
    //   body: JSON.stringify({
    //     data: {
    //       type: 'bands',
    //       attributes: {
    //         name: this.name,
    //       },
    //     },
    //   }),
    // });
    // let json = await response.json();
    // let { id, attributes } = json.data;
    // let record = new Band({ id, ...attributes });
    // this.catalog.add('band', record);
    // this.router.transitionTo('bands.band.songs', id);
    let band = await this.catalog.create('band', { name: this.name });
    this.router.transitionTo('bands.band.songs', band.id);
  }
}
