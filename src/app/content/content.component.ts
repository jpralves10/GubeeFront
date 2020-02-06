import { Component, OnInit, Input } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() listProdutos: any[]

  constructor(
    private _service: NotificationsService
  ) { }

  ngOnInit() { }

  formatarPreco(preco: any){
    return String(preco).replace(".", ",")
  }

  comprarComic(){
    const toast = this._service.success('Item Adicionado!', '', {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }
}