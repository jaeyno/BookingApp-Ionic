import { OffersPage } from './offers/offers.page';
import { DiscoverPage } from './discover/discover.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'discover',
    component: DiscoverPage,
    children: [
      {
        path: ':placeId',
        loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
      },
    ]
  },
  {
    path: 'offers',
    component: OffersPage,
    children: [
      {
        path: 'new',
        loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
      },
      {
        path: 'edit/:placeId',
        loadChildren: () => import('./offers/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
      },
      {
        path: ':placeId',
        loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
