import { Component } from '@angular/core';
interface Skill {
  skill:String;
  image:String;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent {
  skills:Skill[]; //Arreglo de tareas -> Tarea[] = []

  constructor() {
      this.skills=[
        {
          skill:"Python",
          image:"data:image/jpeg;base64,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"
        },
        {
          skill:"C",
          image:"https://i.pinimg.com/originals/13/a8/94/13a89487b6a28c9fd6fee57cf6bc5e2c.png"
        },
        {
          skill:"Java",
          image:"https://www.inesem.es/revistadigital/informatica-y-tics/files/2015/10/inesem-java-1024x768.jpg"
        },
        {
          skill:"Javascript",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab05l3ndGtZqyqxgTeOkmB7g2eDGyYrQp60gRu108tIEXOLQTl8tf9Jpx90UiNJEIv1Q&usqp=CAU"
        },
        {
          skill:"MongoDB",
          image:"https://blog.buildersoft.com.mx/wp-content/uploads/2021/10/mongodb.png"
        },
        {
          skill:"Node.js",
          image:"https://i.blogs.es/f60ee9/nodejs2/1366_2000.png"
        },
        {
          skill:"SQL",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4_nq8WXse7kcyZ3wwY9hIKDgQEzE0qIyfw&usqp=CAU"
        },
        {
          skill:"Verilog",
          image:"https://eirikpre.gallerycdn.vsassets.io/extensions/eirikpre/systemverilog/0.13.3/1665418136714/Microsoft.VisualStudio.Services.Icons.Default"
        },
        {
          skill:"Ensamblador",
          image:"https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/20143122/image/medium-061f346ce6cf062c7534f892a730414b.png"
        }
      ]
 
  }
}