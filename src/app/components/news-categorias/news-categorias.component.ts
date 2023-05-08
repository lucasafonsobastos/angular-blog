import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import artigos from '../../../../data/artigos.json';

@Component({
  selector: 'app-news-categorias',
  templateUrl: './news-categorias.component.html',
  styleUrls: ['./news-categorias.component.css']
})
export class NewsCategoriasComponent implements OnInit {

	categorias:any[] = [];

	constructor(
		private elRef: ElementRef,
		private render: Renderer2
	) { }

	ngOnInit(): void {

		const lista:string[] = [];
		artigos.filter((item) => lista.push(item.categoria) );

		this.categorias = lista.filter((item, index) => lista.indexOf(item) === index);

		console.log(this.categorias);

	}

	onClick(item:string){
		console.log(`${item}`);

		const liCategoria = this.elRef.nativeElement.querySelector(`#${item}`);
	}

}
