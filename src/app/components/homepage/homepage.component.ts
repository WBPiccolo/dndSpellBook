import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToSpellbook() {
    this._router.navigate(['spellbook']);
  }
}
