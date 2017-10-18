import { Injectable } from '@angular/core';
import {NodeApiService} from "./node-api.service";
import 'rxjs/add/operator/map';

@Injectable()
export class HobbyService {

  private resourceUrl = 'hobbies';

   constructor(
    private node_api: NodeApiService
  ) { }

  getAllHobbies() {
    return this.node_api.get(this.resourceUrl)
      .map(response => response.json());
  }

  addHobby(data) {
    return this.node_api.post(this.resourceUrl, data)
      .map(response => response.json());
  }

  removeHobby(id) {
    return this.node_api.delete(this.resourceUrl, id)
      .map(response => response.json());
  }
}
