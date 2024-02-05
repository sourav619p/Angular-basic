import { Component } from '@angular/core';
import { json } from 'stream/consumers';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public  title = 'World';
  // Template Driven Form
  // data = {
  //   firstname:'',
  //   lastname:'',
  //   Phonenumber:'',
  //   email:''
  // }
  // onsubmit(){
  //   alert(JSON.stringify(this.data))
  // }

  // Reactive Forms
  // constructor(private fb:FormBuilder){}
  // submit = false;
  // registrationForm = this.fb.group({
  //   firstName:['',Validators.required],
  //   lastName:[''],
  //   phone:[''],
  //   email:['']
  // })

  // get f() {
  //   return this.registrationForm.controls;
  // }

  // onsubmit(){
  //   this.submit = true;
  //   console.log('clicked');
  //   console.log('f',this.f)
  // }

  //Reactive Dynamic Form
  get alternativeEmails(){
    return this.registration.get('alternativeEmails') as FormArray
  }

  addAlternativeEmail(){
    console.log('alternativeEmails',this.alternativeEmails)
    this.alternativeEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder){}

  registration = this.fb.group({
    email:['IT Master'],
    alternativeEmails: this.fb.array([])
  })

  onSubmit(values : FormGroup){
   
  }

//   public numSystem = 'Even'
//   public count = 0;
//   public status = 'Even'
//   public isHidden = true;
//   data = {
//    one: 'one',
//    two: 'two'
//   }

//   public fruits =[
//     {name:"lal",job:"software"},
//     {name:"amal",job:"security"},
//     {name:"ram",job:"network"}
//   ]

//   colorFunction(){
//    return 'red'
//   }
 
//  UpdateCount(operation : string){
//    if(operation === 'Increment'){
//      this.count += 1;
//    }else{
//      if (this.count != 0){
//      this.count -= 1;
//      }
//    }
//    if(this.count % 2 == 0){
//      this.numSystem = 'Even'
//    }else{
//      this.numSystem = 'Odd'
//    }
//  }
//  checkNumber(){
//   this.isHidden = false;
//   if(this.count % 2 == 0){
//     this.status = 'Even'
//   }else{
//     this.status = 'Odd'
//   }
//  }
//  clear(){
//   this.isHidden = true;
//   this.count = 0;
//  }


 }
