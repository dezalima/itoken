import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css']
})
export class Input2Component implements OnInit {

    @Input() control = new FormControl();
    @Input() label: string;
    @Output() error = new EventEmitter();

    mensage() {
      // this.error.emit({asdasdas})
    }

  constructor() { }

  ngOnInit(): void {
  }

}
