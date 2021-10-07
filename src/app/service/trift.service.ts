import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
	providedIn: 'root'
})

export class TriftService {

    url: string = "http://localhost:3000/products";
	headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

	constructor(private http: HttpClient) { }

	getAllProducts() {
		return this.http.get(this.url);
	}

    addProduct(any: any) {
		//we set up our body with data from the cleint side
		const body = JSON.stringify({
						name: any.name,
						decsription: any.decsription,
						price: any.price,
						category: any.category,
						image: any.image,
						quantity: any.quantity,

					});

		this.http.post(this.url, body, { headers: this.headers }).subscribe(
			(data) => {
				console.log(data);
			},
			(err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					console.log('Client-side.');
					console.log(body);

				} else {
					console.log('Server-side.');
					console.log(body);
				}
			}
		);
	}



 }