import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionCommitteeComponent } from './vision-committee.component';

describe('VisionCommitteeComponent', () => {
  let component: VisionCommitteeComponent;
  let fixture: ComponentFixture<VisionCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionCommitteeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
