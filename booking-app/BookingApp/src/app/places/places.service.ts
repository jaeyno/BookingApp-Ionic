import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mension', 'In the heart of New York City', 'https://aihkcdnstoragep01.blob.core.windows.net/pgl-release/Images/ArticleImages/19/19156.jpg', 149.99),
    new Place('p2', 'Amour Toujoirs', 'A romantic place', 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg', 200.21)
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }

  getPlaces(id : string) {
    return { ...this._places.find(p => p.id === id)}
  }
}
