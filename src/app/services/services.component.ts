import { Component, OnInit } from '@angular/core';
import {faLongArrowAltLeft,faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  faLongArrowAltLeft=faLongArrowAltLeft;
  faLongArrowAltRight=faLongArrowAltRight;
  products: any = [
    {
      title:"hello",
      subTitle:"sssss",
      img:"../../assets/images/pics/portfolio/5.jpg",

    },{
      title:"amira",
      subTitle:"web developer",
      img:"../../assets/images/pics/portfolio/10.jpg",

    },{
      title:"hello",
      subTitle:"sssss",
      img:"../../assets/images/pics/portfolio/4.jpg",

    },{
      title:"hello",
      subTitle:"sssss",
      img:"../../assets/images/pics/portfolio/3.jpg",

    },{
      title:"hello",
      subTitle:"sssss",
      img:"../../assets/images/pics/portfolio/2.jpg",

    },{
      title:"hello",
      subTitle:"sssss",
      img:"../../assets/images/pics/portfolio/1.jpg",

    },{
      title:"hello",
      subTitle:"sssss",
      img:"../../assets/images/pics/portfolio/6.jpg",

    }
  ];

  numOfPages: number[] = [];

  pageSize = 3;

  currentPage = 0;
  lastPage = 0;

  loggedInPerson: boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.lastPage = this.products.length / this.pageSize;
        this.calculateNumOfPages();
  }
  calculateNumOfPages() {
    this.numOfPages = [];
    for (let index = 0; index < this.products.length / this.pageSize; index++) {
      this.numOfPages.push(index + 1);
    }
  }
  getSlicedArrOfServices(){
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.products.slice(start, end);
  }
}
