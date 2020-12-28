import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngresoEgresoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
