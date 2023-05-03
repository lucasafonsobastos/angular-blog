import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

	@Input()
	photoCover:string = '';
	@Input()
	cardTitle:string = '';
	@Input()
	cardDescription = '';
	@Input()
	cardAutor = '';

	constructor(){

	}
	ngOnInit(): void {

	}
}
