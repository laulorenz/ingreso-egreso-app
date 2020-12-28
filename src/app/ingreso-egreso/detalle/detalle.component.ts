import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetalleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
