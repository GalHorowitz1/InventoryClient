import {Injectable} from "@angular/core";
import {IAction} from "../shared/models/appState";

@Injectable()
export class InventoryAction {

  static SOME = 'this is example';

  some(data): IAction {
    return {
      type: InventoryAction.SOME,
      payload: {data: data}
    };
  }

}
