import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import *as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  dates: any = {}
  constructor(private http: HttpClient) { }

  getDetails(date: any) {
    const url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`
    return this.http.get(url)
  }

  setDate(date1: any, date2: any) {
    this.dates.date1 = moment(date1).format('D-MMMM-YYYY');
    this.dates.date2 = moment(date2).format('D-MMMM-YYYY');

  }

  getDates() {
    return this.dates
  }
}
