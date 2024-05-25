import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Directive({selector: 'my-kid-name'})
export class MykidNameSlot {}

@Directive({selector: 'my-kid-biography'})
export class MykidBiographySlot {}
