import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-barre-outils',
  templateUrl: './barre-outils.component.html',
  styleUrls: ['./barre-outils.component.css']
})
export class BarreOutilsComponent implements OnInit {
  
  Buttons:Array<ButtonComponent>=new Array<ButtonComponent>();  

  constructor(public toastr:ToastrService) 
  { 
    this.Buttons.push(new ButtonComponent("Button1","fa fa-home"));
    this.Buttons.push(new ButtonComponent("Button2","fa fa-trash"));
    this.Buttons.push(new ButtonComponent("Button3","fa fa-folder"));
    this.Buttons.push(new ButtonComponent("Button4","fa fa-close"));
    this.Buttons.push(new ButtonComponent("Button5","fa fa-bars"));    
  }

  ngOnInit() 
  {
    
  }

  Alert(event) 
  {
    if(event=="Button1")
    {
      this.toastr.success(event+" pressed","Congratulations You Pressed "+event)
    }

    if(event=="Button2")
    {
      this.toastr.show(event+" pressed","Congratulations You Pressed "+event)
    }

    if(event=="Button3")
    {
      this.toastr.error(event+" pressed","Congratulations You Pressed "+event)
    }

    if(event=="Button4")
    {
      this.toastr.info(event+" pressed","Congratulations You Pressed "+event)
    }

    if(event=="Button5")
    {
      this.toastr.warning(event+" pressed","Congratulations You Pressed "+event)
    }
  }

}
