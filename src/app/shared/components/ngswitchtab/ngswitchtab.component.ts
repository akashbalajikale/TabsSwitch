import { Component, OnInit } from '@angular/core';
import { iskills } from '../../models/skills';

@Component({
  selector: 'app-ngswitchtab',
  templateUrl: './ngswitchtab.component.html',
  styleUrls: ['./ngswitchtab.component.scss']
})
export class NgswitchtabComponent implements OnInit {
skillsbox : Array<iskills>= [
  {
    skillname :'nodejs',
    skillInfo :`<strong>nodejs</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'express',
    skillInfo :`<strong>express</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'mysql',
    skillInfo :`<strong>mysql</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'springboot',
    skillInfo :`<strong>springboot</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  }
 ]

 defaultskill : string ='express'
  constructor() { }

  ngOnInit(): void {
  }

  onClick(skill :iskills){
    this.defaultskill=skill.skillname
  }
}
