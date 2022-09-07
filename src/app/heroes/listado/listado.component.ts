import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes: string[] =['Spiderman','Ironman','Hulk','Thor'];
  heroBorrado: string='';
  // false || null || undefined

  borrarHeroe(){
    //this.heroes=['Spiderman','Ironman','Hulk'];
    //this.heroes.splice(1,1);
   //const heroeBorrado=this.heroes.shift();
   this.heroBorrado=this.heroes.shift() || '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
