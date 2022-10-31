import {Observable} from "./Observable"


export interface Observer {
  update(Object: Observable): void;
}