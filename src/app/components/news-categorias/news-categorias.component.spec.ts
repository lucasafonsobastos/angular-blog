import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCategoriasComponent } from './news-categorias.component';

describe('NewsCategoriasComponent', () => {
  let component: NewsCategoriasComponent;
  let fixture: ComponentFixture<NewsCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
