import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'search-angular-app';
  selectedLocation: HousingLocation | undefined;
  constructor(private housingService: HousingService) {}
  data = this.housingService.housingLocationList;

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
