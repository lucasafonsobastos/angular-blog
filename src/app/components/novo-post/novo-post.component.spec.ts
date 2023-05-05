import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPostComponent } from './novo-post.component';

describe('NovoPostComponent', () => {
  let component: NovoPostComponent;
  let fixture: ComponentFixture<NovoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
