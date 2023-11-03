import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    StarRatingsComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    StarRatingsComponent
  ]
})
export class FeatureModule { }
