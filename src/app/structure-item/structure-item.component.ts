import { Component, Input } from '@angular/core';
import { Structure } from '../anatomicalStructure.model';

@Component({
  selector: 'app-structure-item',
  templateUrl: './structure-item.component.html',
  styleUrls: ['./structure-item.component.css']
})
export class StructureItemComponent {

  @Input() post: Structure = {};

  onNameClick(id:any){
    console.log(id);
  }

}
