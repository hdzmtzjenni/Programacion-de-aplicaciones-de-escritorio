import { Component } from '@angular/core';

interface Project{
  name:String,
  date: String,
  descripcion:String,
  languages: String[]
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects:Project[];
  constructor(){
    this.projects=[
      {
        name:"Adopt a Friend",
        date: 'Diciembre 2022',
        descripcion:"Página web desarrollada para ayudar a encontrarle un hogar a las mascotas abandonadas,donde las personas pueden publicar mascotas en adopción o dar en adopción alguna mascota, estodo esto a través de una interfaz sencilla de utilizar.",
        languages:['Css','Javascript','MongoDB','NodeJs']
      },
      {
        name:"FCC Toolkit",
        date: 'Mayo 2021',
        descripcion:"Como proyecto escolar, se desarrolló en Python un generador de tablas de verdad que da una declaración lógica con premisas de p - z, muestra los valores individuales para cada operación y los valores finales de la declaración.",
        languages:['Python']

      },
      {
        name:"API cartas",
        date:'Mayo 2022',
        descripcion:"API que implementa una baraja funcional para implementar juegos de cartas.",
        languages:['Java']

      }
    ]
  }
}
