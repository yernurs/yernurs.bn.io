import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDirectoryComponent } from './project-directory.component';

describe('ProjectDirectoryComponent', () => {
  let component: ProjectDirectoryComponent;
  let fixture: ComponentFixture<ProjectDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
