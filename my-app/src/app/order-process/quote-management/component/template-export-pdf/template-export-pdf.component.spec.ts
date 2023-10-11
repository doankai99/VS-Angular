import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExportPdfComponent } from './template-export-pdf.component';

describe('TemplateExportPdfComponent', () => {
  let component: TemplateExportPdfComponent;
  let fixture: ComponentFixture<TemplateExportPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateExportPdfComponent]
    });
    fixture = TestBed.createComponent(TemplateExportPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
