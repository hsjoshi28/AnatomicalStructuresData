import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResponseData, Row, Structure } from '../anatomicalStructure.model';

@Component({
  selector: 'app-anatomical-structure',
  templateUrl: './anatomical-structure.component.html',
  styleUrls: ['./anatomical-structure.component.css']
})
export class AnatomicalStructureComponent {
  url = "https://mmpyikxkcp.us-east-2.awsapprunner.com/v2/1NMfu1bEGNFcTYTFT-jCao_lSbFD8n0ti630iIpRj-hw/949267305";
  isLoading = false;
  structure : Structure[] = []
  row : Row[] = []
  
  constructor(private http: HttpClient) { 
    this.fetchPosts();
  }

  public fetchPosts() {
    this.isLoading = true;
    this.structure = [];

    this.http
      .get<ResponseData>(this.url)
      .pipe(map((responseData:ResponseData) => {
        responseData.data?.map((rows:Row) =>{
          rows.anatomical_structures.map((struct:Structure) => {
            if (struct.name )
        
            this.structure.push(struct);
          })
        });
        return this.structure;
      }))
      .subscribe(posts => {
        // console.log(posts);
        this.isLoading = false;
      }
      )
      
  }



}
