import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomicalStructureComponent } from './anatomical-structure.component';

describe('AnatomicalStructureComponent', () => {
  let component: AnatomicalStructureComponent;
  let fixture: ComponentFixture<AnatomicalStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnatomicalStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnatomicalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
