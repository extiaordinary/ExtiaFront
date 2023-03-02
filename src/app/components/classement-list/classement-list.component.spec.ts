import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementListComponent } from './classement-list.component';

describe('ClassementListComponent', () => {
  let component: ClassementListComponent;
  let fixture: ComponentFixture<ClassementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
