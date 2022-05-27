import { ServiceService } from './../service/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-collect-dates',
  templateUrl: './collect-dates.component.html',
  styleUrls: ['./collect-dates.component.scss']
})
export class CollectDatesComponent implements OnInit {

  form: any
  constructor(private router: Router, private formBuilder: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      date1: [''], date2: ['']
    })
  }

  openButton() {
    this.router.navigate(['/stock-details'])
  }

  submit() {
    this.service.setDate(this.form.get('date1').value, this.form.get('date2').value)
    this.openButton()
  }

}
