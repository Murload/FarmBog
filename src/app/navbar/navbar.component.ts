import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  en_construccion(){
    Swal.fire({
      icon: 'info',
      title: 'En Construcción',
      text: 'Módulo se encuentra fuera de servicio'
    })
}

}
