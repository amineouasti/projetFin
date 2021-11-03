import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassficationDialogComponent } from './classfication-dialog.component';

describe('ClassficationDialogComponent', () => {
  let component: ClassficationDialogComponent;
  let fixture: ComponentFixture<ClassficationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassficationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassficationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
