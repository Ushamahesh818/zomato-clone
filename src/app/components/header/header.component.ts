import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private _userService:UserService){

  }

  onSubmit(userForm:any){
    let userInfo=userForm.value;
    let userObj=new User(userInfo.fullName,userInfo.email,userInfo.password,12345,"user");
    // console.log(userObj)
   this. _userService.registerUser(userObj).subscribe((response:any)=>{
    // console.log(response);
    // Swal.fire('Good job!', 'You clicked the button!', 'success');
    Swal.fire(response.success);
   // alert(response);
   });
  }

  LoginClicked(loginForm:any){
    
    let user=loginForm.value;
    console.log(user.email);
    console.log(user.password);
    this._userService.loginUser({email:user.email,password:user.password}).subscribe((response:any)=>{
      console.log(response);
})
  }
}

export class User {
  name!: string;
  email!: string;
  password!: string;
  phone!:number;
  role!: string;

  constructor(name: string, email: string,password: string,phone:number,role: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.role = role;

  }

}