import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BarreOutilsComponent } from '../barre-outils/barre-outils.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  text:String;

  @Input()
  Icon:String;

  @Output()
  evaluationChange: EventEmitter<String> = new EventEmitter<String>();

  constructor(text:String,Icon:String) 
  { 
    this.text=text;
    this.Icon=Icon;
  }

  ngOnInit() {
  }

  valueChanged()
  {    
    this.evaluationChange.emit(this.text)
  }

}
