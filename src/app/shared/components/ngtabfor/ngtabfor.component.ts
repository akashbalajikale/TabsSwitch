import { Component, OnInit } from '@angular/core';
import { iskills } from '../../models/skills';

@Component({
  selector: 'app-ngtabfor',
  templateUrl: './ngtabfor.component.html',
  styleUrls: ['./ngtabfor.component.scss']
})
export class NgtabforComponent implements OnInit {
 skillsArray : Array<iskills>= [
  {
    skillname :'sass',
    skillInfo :`<strong>sass</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'typescript',
    skillInfo :`<strong>typescript</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'bootstrap',
    skillInfo :`<strong>bootstrap</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  },
  {
    skillname :'rxjs',
    skillInfo :`<strong>rxjs</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint ea totam ducimus voluptas? Quam inventore necessitatibus doloremque id modi consectetur. Reprehenderit, eos incidunt facilis natus perferendis quia quaerat voluptas!
`
  }
 ]

 selectedskill = this.skillsArray[2].skillname;
  constructor() { }

  ngOnInit(): void {
  }

}
