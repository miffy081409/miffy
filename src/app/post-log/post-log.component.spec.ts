import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLogComponent } from './post-log.component';

describe('PostLogComponent', () => {
  let component: PostLogComponent;
  let fixture: ComponentFixture<PostLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
