import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync
} from "@angular/core/testing";

import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { HomeComponent } from "./home.component";
import { HttpClientModule } from "@angular/common/http";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>; // test invironment for this component
  let de: DebugElement; // to render html element

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomeComponent]
    }).compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  // test home component creation

  fit("should create", () => {
    expect(component).toBeTruthy();
  });

  // Test if component content includes string of 'warn'
  fit("should have an element called items in videos", () => {
    console.log(component.videos);
    expect(component.videos).toContain("undefined");
  });
});
/*

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
