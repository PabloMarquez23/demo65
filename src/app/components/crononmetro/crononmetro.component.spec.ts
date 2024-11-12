import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrononmetroComponent } from './crononmetro.component';

describe('CrononmetroComponent', () => {
  let component: CrononmetroComponent;
  let fixture: ComponentFixture<CrononmetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrononmetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrononmetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
