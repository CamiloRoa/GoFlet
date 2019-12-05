import { Component, OnInit, ChangeDetectorRef, OnDestroy, HostBinding } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    { name:"Home", route:"/admin", icon:"home"},
    { name:"Conductor", route:"/admin/cliente", icon:"commute"},
    { name:"Servicios", route:"/admin/servicios", icon:"trending_up"},
    { name:"Usuarios", route:"/admin/usuarios", icon:"group"}
  ]
  fillerContent = Array.from({length: 50}, () =>
      `Lorem`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);  
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;


  ngOnInit() {
  }

}
