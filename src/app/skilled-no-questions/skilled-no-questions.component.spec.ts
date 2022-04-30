import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledNoQuestionsComponent } from './skilled-no-questions.component';

describe('SkilledNoQuestionsComponent', () => {
  let component: SkilledNoQuestionsComponent;
  let fixture: ComponentFixture<SkilledNoQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilledNoQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilledNoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
