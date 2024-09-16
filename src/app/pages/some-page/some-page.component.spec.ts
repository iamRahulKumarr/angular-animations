import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomePageComponent } from './some-page.component';

describe('SomePageComponent', () => {
  let component: SomePageComponent;
  let fixture: ComponentFixture<SomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
