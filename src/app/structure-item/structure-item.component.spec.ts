import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureItemComponent } from './structure-item.component';

describe('StructureItemComponent', () => {
  let component: StructureItemComponent;
  let fixture: ComponentFixture<StructureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
