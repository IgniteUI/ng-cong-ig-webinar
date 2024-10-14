import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_BUTTON_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { ToyCollectionComponent } from './toy-collection.component';

describe('ToyCollectionComponent', () => {
  let component: ToyCollectionComponent;
  let fixture: ComponentFixture<ToyCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ToyCollectionComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, HttpClientTestingModule, IGX_BUTTON_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
