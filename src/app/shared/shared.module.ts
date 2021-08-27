import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';



@NgModule({
  declarations: [
    WeatherReportComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WeatherReportComponent
  ]
})
export class SharedModule { }
