import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCoreComponent } from './project-core.component';

describe('ProjectCoreComponent', () => {
  let component: ProjectCoreComponent;
  let fixture: ComponentFixture<ProjectCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
