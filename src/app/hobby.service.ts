import { Injectable } from '@angular/core';
import {NodeApiService} from "./node-api.service";
import 'rxjs/add/operator/map';

@Injectable()
export class HobbyService {

   constructor(
    private node_api: NodeApiService
  ) { }

  getAllHobbies() {
    return this.node_api.get('hobbies')
      .map(response => response.json());
  }

  getHobby(id) {
    return this.node_api.get('hobby/'+ id)
      .map(response => response.json());
  }

  addHobby(data) {
    return this.node_api.post('add-hobby', data)
      .map(response => response.json());
  }

  editHobby(id) {
    return this.node_api.put('edit-hobby', id)
      .map(response => response.json());
  }

  removeHobby(id) {
    return this.node_api.delete('remove-hobby', id)
      .map(response => response.json());
  }
}
