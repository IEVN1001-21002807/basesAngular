import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWith:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFiter:string='';

  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos: IProductos[] = [
      {
          "ProductoId": 1,
          "Modelo": "rubicon",
          "Descripcion": "4 puertas",
          "Year": "enero 15 2020",
          "Precio": 1200000,
          "Marca": "jeep",
          "Color": "negro",
          "ImgUrl": "https://img.remediosdigitales.com/511ec0/jeep-r-wrangler-unlimited-rubicon-edicion-deluxe-2020_2-1-/1366_2000.jpg"
      
      },
      {
          "ProductoId": 2,
          "Modelo": "vento",
          "Descripcion": "4 puertas",
          "Year": "mayo 2 2020",
          "Precio": 180000,
          "Marca": "volsvagen",
          "Color": "azul",
          "ImgUrl": "https://img.remediosdigitales.com/6f6fdc/volkswagen-vento-allstar-2017-mexico-2-/1366_2000.jpg"
      
      },
      {
          "ProductoId": 3,
          "Modelo": "tsuru",
          "Descripcion": "4 puertas",
          "Year": "marzo 12 2021",
          "Precio": 30000,
          "Marca": "nissan",
          "Color": "blanco",
          "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEP_vIKAg18pDQ8OTBGyMWgeKJGlqshvs0A&s"
      
      },
      
  ]
}
