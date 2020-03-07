import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReactivoComponent } from './tabla-reactivo.component';

describe('TablaReactivoComponent', () => {
  let component: TablaReactivoComponent;
  let fixture: ComponentFixture<TablaReactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
