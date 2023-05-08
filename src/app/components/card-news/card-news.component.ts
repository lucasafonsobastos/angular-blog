import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

	@Input()
	id:string = '';
	@Input()
	photoCover:string = '';
	@Input()
	cardTitle:string = '';
	@Input()
	cardDescription = '';
	@Input()
	cardAutor = '';
	@Input()
	cardData = '';

	constructor(){

	}
	ngOnInit(): void {

	}
}
