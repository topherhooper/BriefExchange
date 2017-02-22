/**
 * Created by chooper on 2/16/17.
 */
import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let proofers = [
      {id: 1, name: 'Jasmine Miller', school: 'Stanford University'},
      {id: 2, name: 'Martha Hoover', school: 'Vanderbilt University'},
      {id: 3, name: 'Christopher Hooper', school: 'University of Richmond'},
      {id: 3, name: 'Bryan Casey', school: 'College of William and Mary'},

    ];
    return {proofers};
  }
}
