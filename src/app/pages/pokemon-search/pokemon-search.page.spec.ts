import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonSearchPage } from './pokemon-search.page';

describe('PokemonSearchPage', () => {
  let component: PokemonSearchPage;
  let fixture: ComponentFixture<PokemonSearchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSearchPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule] // Añadido HttpClientTestingModule por si el servicio lo requiere aquí
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});