import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnemonicDialogComponent } from './mnemonic-dialog.component';

describe('MnemonicDialogComponent', () => {
  let component: MnemonicDialogComponent;
  let fixture: ComponentFixture<MnemonicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnemonicDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnemonicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
