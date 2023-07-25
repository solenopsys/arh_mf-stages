import { Component } from '@angular/core';
import {async, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent {
  statges$:Observable<any>

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.statges$= this.http.get("/modules/solenopsys/mf-stages/src/assets//stages.json")
  }

  protected readonly async = async;
}
