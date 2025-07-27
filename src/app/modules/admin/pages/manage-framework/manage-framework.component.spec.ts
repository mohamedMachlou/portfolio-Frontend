import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFrameworkComponent } from './manage-framework.component';

describe('ManageFrameworkComponent', () => {
  let component: ManageFrameworkComponent;
  let fixture: ComponentFixture<ManageFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageFrameworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
