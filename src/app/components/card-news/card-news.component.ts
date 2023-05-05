<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> 99a6f1b2b8dbeeab64bd1c677d200d723a8f0097

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
<<<<<<< HEAD
export class CardNewsComponent {

=======
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
>>>>>>> 99a6f1b2b8dbeeab64bd1c677d200d723a8f0097
}
