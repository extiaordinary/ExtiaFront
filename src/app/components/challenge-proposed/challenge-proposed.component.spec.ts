import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeProposedComponent } from './challenge-proposed.component';

describe('ChallengeProposedComponent', () => {
  let component: ChallengeProposedComponent;
  let fixture: ComponentFixture<ChallengeProposedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeProposedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeProposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
