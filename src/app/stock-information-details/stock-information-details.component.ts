import { ServiceService } from './../service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-information-details',
  templateUrl: './stock-information-details.component.html',
  styleUrls: ['./stock-information-details.component.scss']
})
export class StockInformationDetailsComponent implements OnInit {

  dates: any = {}
  date1: any
  date2: any
  longText = "test"
  openGreater = `date 1 Open value is greater than date 2`;
  openLesser = "date 1 Open value is lesser than date 2";
  openEqual = "date 1 Open value is equal date 2"
  closeGreater = `date 1 Close value is greater than date 2`;
  closeLesser = "date 1 Close value is lesser than date 2";
  closeEqual = "date 1 Close value is equal date 2"
  highGreater = `date 1 High value is greater than date 2`;
  highLesser = "date 1 High value is lesser than date 2";
  highEqual = "date 1 High value is equal date 2"
  lowGreater = `date 1 Low value is greater than date 2`;
  lowLesser = "date 1 Low value is lesser than date 2";
  lowEqual = "date 1 Low value is equal date 2"
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.dates = this.service.getDates()
    if (this.dates.date1) {
      this.service.getDetails(this.dates.date1).subscribe((result: any) => {
        this.date1 = result
      })
    }
    if (this.dates.date2) {
      this.service.getDetails(this.dates.date2).subscribe((result: any) => {
        this.date2 = result

      })

    }


  }

}
