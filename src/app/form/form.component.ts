import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formError:boolean=false;
  newarrayvalue:any[]=[];
  form:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form=this.fb.group({
      YourFirstname:['',Validators.required],
      YourLastname:['',Validators.required],
      YourEmailid:['',Validators.required],
      YourContactno:['',Validators.required],
    })
  }

  ngOnInit(): void {

  }

  submitForm():void{
    const val=this.form.value;
      for (const key in val){
        this.newarrayvalue.push({"key":key,"value":val[key]});
        }
      console.log(this.newarrayvalue);
  }
  
}
