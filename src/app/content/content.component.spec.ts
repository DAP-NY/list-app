import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsContentComponent } from './content.component';

describe('GamesComponent', () => {
  let component: ListsContentComponent;
  let fixture: ComponentFixture<ListsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
