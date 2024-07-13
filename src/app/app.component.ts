import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormControl,Validators,FormGroup } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,DatePipe,DecimalPipe,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Augular';
  imageCoverUrl ='/img/todo-list.png'

  onImageClick(){
    alert("ยินดีต้อนรับ")
  }
  major = 'Programmer'
  item =["A","B","C","D","E"]

  size ="M"

  sizeList=["S","M","L","XL"]

  now = new Date()

  number = 1500.5

  employees=[
    {fistName: 'A' ,lastName:'AA',Salary: 2005.5},
    {fistName: 'B' ,lastName:'BB',Salary: 1500},
    {fistName: 'C' ,lastName:'CC',Salary: 3000.555},
  ]

  name =new FormControl('')

  ProfileForm= new FormGroup({
    firstName: new FormControl('' , Validators.required ),
    lastname: new  FormControl('', Validators.required)
  })

  profileFormSubmit(){
    console.log(this.ProfileForm.valid)
    console.log(this.ProfileForm.value)
  }
}
