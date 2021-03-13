import { Component, OnInit ,Input} from '@angular/core';
import {faGem} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  faGem=faGem;
  @Input() product: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
