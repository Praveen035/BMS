import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategoryDetailsComponent } from './recipe-category-details.component';

describe('RecipeCategoryDetailsComponent', () => {
  let component: RecipeCategoryDetailsComponent;
  let fixture: ComponentFixture<RecipeCategoryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCategoryDetailsComponent]
    });
    fixture = TestBed.createComponent(RecipeCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
