import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import artigos from '../../../../data/artigos.json';

//import data from '../../../../data/artigos/';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit{

	titulo:string = '';
	content:string = '';
	autor:string = '';
	data:string ='';

	private id:string | null = '0';

	constructor(
		private router:ActivatedRoute,
		private render: Renderer2,
		private http:HttpClient,
		private elRef: ElementRef
	){ }

	ngOnInit(): void {
		this.router.paramMap.subscribe( value => this.id = value.get("id"));
		this.setValuesToComponent(this.id);
	}

	setValuesToComponent(id:string| null){
		const result = artigos.filter(artigo => artigo.id == id)[0]

		this.autor = result.autor;
		this.titulo = result.titulo;
		this.data = result.data;
		this.content = result.artigo;

		this.http.get(`/assets/txt/${this.content}`, { responseType: 'text'}).subscribe(
			data => {
				//console.log(data);
				//this.content = data;
				const divArtigos = this.elRef.nativeElement.querySelector('#divArtigo');
				this.render.setProperty(divArtigos, 'innerHTML', data)
			},
			error => {
				console.log(error);
			}
		)

	}


}
