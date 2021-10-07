import { Component, OnInit } from '@angular/core';
import { TriftService } from '../../service/trift.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  iterms: any = {};
	categoryType: string;
	categoryItem: any = {};
	selectedIterm: any = {};
	index: number;

	categories: any[] = [];
  constructor(private triftService: TriftService, ) { }

  ngOnInit(): void {
  }


  //getting all the store product
	load() {
		this.triftService.getAllProducts().subscribe((detail: any) => {
			for (const pos in detail) {
				this.categories.push(detail[pos].category)
			}
			
			this.categories = [...new Set(this.categories)].sort();

			this.iterms = detail;
		})
	}

}

