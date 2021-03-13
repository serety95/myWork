import { Component, OnInit } from '@angular/core';
import {faGem} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  faGem=faGem;
  constructor() { }

  ngOnInit(): void {
  }

}
