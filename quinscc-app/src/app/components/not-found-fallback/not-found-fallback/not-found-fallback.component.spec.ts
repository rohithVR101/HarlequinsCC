import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundFallbackComponent } from './not-found-fallback.component';

describe('NotFoundFallbackComponent', () => {
  let component: NotFoundFallbackComponent;
  let fixture: ComponentFixture<NotFoundFallbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundFallbackComponent]
    });
    fixture = TestBed.createComponent(NotFoundFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
