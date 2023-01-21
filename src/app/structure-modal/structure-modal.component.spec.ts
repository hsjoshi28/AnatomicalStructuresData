import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureModalComponent } from './structure-modal.component';

describe('StructureModalComponent', () => {
  let component: StructureModalComponent;
  let fixture: ComponentFixture<StructureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
