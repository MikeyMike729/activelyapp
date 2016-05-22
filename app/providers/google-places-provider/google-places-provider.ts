import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Google provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GooglePlacesProvider {
  data: any = null;

  constructor(public http: Http) {}

  getPlaces(query) {
    let places = this.http.get(`/api/googleplaces/json?location=53.5444,-113.4909&radius=5000&name=${query}&key=AIzaSyCbvSt4V-6Ti2IXARiIVoXdiwKzFde82rE`);
    //let places = this.http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=53.5444,-113.4909&radius=5000&name=${query}&key=AIzaSyCbvSt4V-6Ti2IXARiIVoXdiwKzFde82rE`);
    return places;
  }
  
}

