import { PlacesService } from './../../places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (!param.has('placeId')) {
        this.navCtrl.navigateBack('/places/discover');
        return
      }
      this.place = this.placesService.getPlaces(param.get("placeId"));
    })
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/places/discover');
  }

}
