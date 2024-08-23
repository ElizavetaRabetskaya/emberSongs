import Route from '@ember/routing/route';
import wait from 'rarwe/utils/wait';

export default class BandsBandDetailsRoute extends Route {
  async model() {
    await wait(500);
  }
}
