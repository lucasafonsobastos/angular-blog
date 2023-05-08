import { Component, OnInit } from '@angular/core';
import artigos from '../../../../data/artigos.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	meusAtigos: any[] = [];

	constructor(){
		this.meusAtigos = artigos;
	}

	ngOnInit(): void {


	}

}
