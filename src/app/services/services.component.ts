import { Component, OnInit } from '@angular/core';
import {faGem} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
faGem=faGem;
  constructor() { }

  ngOnInit(): void {
  }

}
