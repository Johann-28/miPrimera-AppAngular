import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
 // template: "<p>Aqui iría un empleado gg</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p { background-color: wheat; }"]

})
export class EmpleadoComponent {
    nombre = "Johann";
    appelido = "Velazquez";
   // private edad = 18;
    edad = 18;
    
    llamaInstitucion(value:String)
    {
      
    }
    
    //institucion = "FCFM";

    /*  getEdad()
    {
      return this.edad;
    }*/

    habilitacionCuadro = false;
    userRegistrado = false;

    getRegistroUsuario()
    {
      this.userRegistrado = true;
      
    }
}
