import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProgrammingLanguageComponent } from './manage-programming-language.component';

describe('ManageProgrammingLanguageComponent', () => {
  let component: ManageProgrammingLanguageComponent;
  let fixture: ComponentFixture<ManageProgrammingLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageProgrammingLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageProgrammingLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
