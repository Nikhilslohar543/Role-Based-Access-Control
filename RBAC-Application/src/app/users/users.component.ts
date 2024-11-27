import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private service: UserService, private router: Router){}

  tempdata: any[] = [];

  ngOnInit(): void {
    this.loadusers();
  }
  
  loadusers() {

    this.service.getUsers().subscribe((data)=>{
      this.tempdata=data;
    })
   
  }

  onClick(id:any){

    this.router.navigate(['/userdetails',id,this.tempdata])

  }

  goto(){

    this.router.navigate(['/home'])

  }

}
