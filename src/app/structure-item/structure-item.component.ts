import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Structure, StructureDetails } from '../anatomicalStructure.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-structure-item',
  templateUrl: './structure-item.component.html',
  styleUrls: ['./structure-item.component.css']
})
export class StructureItemComponent {
  details: StructureDetails | undefined = undefined;
  @ViewChild('modalTemplate', { read: TemplateRef }) modalTemplate!: TemplateRef<any>;

  constructor(private dataService: DataService, private ngbModal: NgbModal) { }

  @Input() post: Structure = {};

  onNameClick(id:any){
    console.log(id);
    
      this.dataService.getDetails(id)
        .subscribe((response: Params) => {
          console.log(response);
          if (response.hasOwnProperty('_embedded') && response['_embedded'] && response['_embedded']['terms'] && Array.isArray(response['_embedded']['terms'])) {
            const [first] = response['_embedded']['terms']
            if (first) {
              const { label, obo_id, iri } = first;
              const description1 = first['description'];
              const description2 = first['annotation']['definition'];
              let description = description1;
              if (Array.isArray(description1) && description1.length == 0 && Array.isArray(description2) && description2.length > 0) {
                description = description2
              }
              this.details = {
                label,
                obo_id,
                iri,
                'description': description.join(', ')
              }
              console.log(this.details);
              this.ngbModal.open(this.modalTemplate)
            }
          }
          const { _embedded } = response;
          console.log(_embedded);
        }, error => {
          console.log(error);
        });
    
  }

}
