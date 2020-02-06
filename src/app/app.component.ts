import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listProdutos: any[] = []
  newListProdutos: any[] = []

  filtroProdutos: string = ""
  filtroMercadoAlvo = []
  filtroTecnologias = []

  constructor(
    private appService: AppService,
  ){
    this.appService.getProdutos().subscribe(Produtos => {

      this.listProdutos = [...Produtos]
      this.newListProdutos = [...Produtos]

      //console.log(this.listProdutos)
    })
  }

  updateFiltro(event){
    this.filtroProdutos = event
    console.log(this.filtroProdutos)

    this.listProdutos = this.newListProdutos

    this.listProdutos = this.listProdutos.filter(d => {
      if(d.description.toUpperCase().includes(this.filtroProdutos.toUpperCase()) || 
         d.productName.toUpperCase().includes(this.filtroProdutos.toUpperCase())){
        return true;
      }
      return false
    });
  }

  updateFiltroMercadoAlvo(event){
    this.filtroMercadoAlvo = event
    //console.log(this.filtroMercadoAlvo)

    this.listProdutos = this.newListProdutos

    if(this.filtroMercadoAlvo.length > 0){

      let listaFilterProdutos = []

      this.listProdutos.forEach(d => {
        d.targetMarket.forEach(c => {
          this.filtroMercadoAlvo.forEach(a => {
            if(c == a){
              listaFilterProdutos.push(d)
            }
          })
        })
      })

      console.log(listaFilterProdutos)

      this.listProdutos = []
      this.listProdutos = [...listaFilterProdutos]
    }
  }

  updateFiltroTecnologias(event){
    this.filtroTecnologias = event
    console.log(this.filtroTecnologias)

    this.listProdutos = this.newListProdutos

    if(this.filtroTecnologias.length > 0){
      
      let listaFilterProdutos = []
  
      this.listProdutos.forEach(d => {
        d.stack.forEach(c => {
          this.filtroTecnologias.forEach(a => {
            if(c == a){
              listaFilterProdutos.push(d)
            }
          })
        })
      })
  
      console.log(listaFilterProdutos)
  
      this.listProdutos = []
      this.listProdutos = [...listaFilterProdutos]
    }
  }
}
