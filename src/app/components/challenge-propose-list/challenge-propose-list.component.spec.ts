import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeProposeListComponent } from './challenge-propose-list.component';

describe('ChallengeProposeListComponent', () => {
  let component: ChallengeProposeListComponent;
  let fixture: ComponentFixture<ChallengeProposeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeProposeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeProposeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
