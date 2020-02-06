import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filtroComics:string = ""

  closeResult: string;

  mercadoAlvo = [
    "Ecommerce",
    "ERP",
    "Lojista que não desejam possuir ecommerce",
    "Loja fisica",
    "Telecom",
    "Venda direta",
    "Mobile First",
    "Digital Onboarding"
  ]

  tecnologias = [
    "Java 10",
    "Kotlin",
    "Kafka",
    "Event Stream",
    "Redis",
    "MongoDB",
    "NodeJS",
    "Big Data Analytics",
    "Hadoop",
    "Pig",
    "Cassandra"
  ]

  mercadoAlvoFiltro = []
  tecnologiasFiltro = []

  @Output() filtroComicsOutput = new EventEmitter();
  @Output() filtroMercadoAlvo = new EventEmitter();
  @Output() filtroTecnologias = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  updateFiltro(){
    this.filtroComicsOutput.emit(this.filtroComics);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     
      this.filtroMercadoAlvo.emit(this.mercadoAlvoFiltro);
      this.filtroTecnologias.emit(this.tecnologiasFiltro);

    }, (reason) => {});
  }

  addOneItemMercadoAlvo(item:any){
    this.mercadoAlvoFiltro.push(item)

    this.mercadoAlvo.splice(this.mercadoAlvo.indexOf(item), 1);
  }

  removeOneItemMercadoAlvo(item:any){
    this.mercadoAlvo.push(item)

    this.mercadoAlvoFiltro.splice(this.mercadoAlvoFiltro.indexOf(item), 1);
  }

  addOneItemTecnologias(item:any){
    this.tecnologiasFiltro.push(item)

    this.tecnologias.splice(this.tecnologias.indexOf(item), 1);
  }

  removeOneItemTecnologias(item:any){
    this.tecnologias.push(item)

    this.tecnologiasFiltro.splice(this.tecnologiasFiltro.indexOf(item), 1);
  }
}
