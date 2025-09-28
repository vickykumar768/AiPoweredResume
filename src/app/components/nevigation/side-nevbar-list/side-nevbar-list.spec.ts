import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNevbarList } from './side-nevbar-list';

describe('SideNevbarList', () => {
  let component: SideNevbarList;
  let fixture: ComponentFixture<SideNevbarList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNevbarList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNevbarList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
