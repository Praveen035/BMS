import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeCategoryComponent } from './create-recipe-category.component';

describe('CreateRecipeCategoryComponent', () => {
  let component: CreateRecipeCategoryComponent;
  let fixture: ComponentFixture<CreateRecipeCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRecipeCategoryComponent]
    });
    fixture = TestBed.createComponent(CreateRecipeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
