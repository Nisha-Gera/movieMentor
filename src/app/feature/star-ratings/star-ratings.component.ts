import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
})
export class StarRatingsComponent implements OnInit {
  // movie :any;
  @Input() rating: any;
  @Input() isReadOnly: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
