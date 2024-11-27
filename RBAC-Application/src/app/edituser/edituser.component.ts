import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  user = {
    firstname: '',
    lastname: '',
    emailid: '',
    username: '',
    password: '',
    role: '',
    permission: '',
    status: ''
  };

  newid: any;

  ngOnInit(): void {

    this.route.paramMap.subscribe((data) => {
      this.newid = data.get('id');
      this.loaduser();
    })

  }

  loaduser() {

    this.service.getUserById(this.newid).subscribe((data) => {
      this.user = JSON.parse(data);
      console.log(this.user);
    })

  }

  onSubmit() {

    if (window.confirm('Confirm updates!!')) {

      this.service.updateUser(this.newid,this.user).subscribe({
        next: (data) => {
          console.log(data)
          this.router.navigate(['/users'])
        },
        error: (error) => {
          alert(error.error);
        }
      });

    }
  }

  togglePermission(permission: string) {
    let permissions = this.user.permission ? this.user.permission.split(',') : [];

    if (permissions.includes(permission)) {
      permissions = permissions.filter(p => p !== permission);
    } else {
      permissions.push(permission);
    }

    this.user.permission = permissions.join(',');
  }

  goto() {

    this.router.navigate(['/userdetails', this.newid])

  }

}
