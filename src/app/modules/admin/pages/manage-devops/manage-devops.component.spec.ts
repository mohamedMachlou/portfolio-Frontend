import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDevopsComponent } from './manage-devops.component';

describe('ManageDevopsComponent', () => {
  let component: ManageDevopsComponent;
  let fixture: ComponentFixture<ManageDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageDevopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
