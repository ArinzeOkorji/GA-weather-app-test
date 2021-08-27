import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/services/get-data/get-data.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  @Input()
  city: string  = '';
  report: any;

  constructor(
    private httpService: GetDataService
  ) { }

  ngOnInit(): void {
    this.httpService.getWeatherReport(this.city)
    .subscribe(
      res => {
        this.report = res
      }
    )
  }

}
