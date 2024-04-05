import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptopnComponent } from './product-descriptopn.component';

describe('ProductDescriptopnComponent', () => {
  let component: ProductDescriptopnComponent;
  let fixture: ComponentFixture<ProductDescriptopnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDescriptopnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDescriptopnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
