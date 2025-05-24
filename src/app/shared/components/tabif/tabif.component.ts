import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabif',
  templateUrl: './tabif.component.html',
  styleUrls: ['./tabif.component.scss']
})
export class TabifComponent implements OnInit {
    selectedskill : string ='angular'
  constructor() { }

  ngOnInit(): void {
  }

  onTabchange(skill : string){
    
    this.selectedskill = skill
  }
}
