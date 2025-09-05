import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPanel } from './person-panel';

describe('PersonPanel', () => {
  let component: PersonPanel;
  let fixture: ComponentFixture<PersonPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
