import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private service: UserService, private router: Router) { }

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

  onSubmit() {
    if (window.confirm('Confirm User Details!')) {
      this.service.addUser(this.user).subscribe({
        next: (data) => {
          alert(data);
          console.log(this.user);
          this.goto();
        },
        error: (error) => {
          alert('Error: ' + error.error);
        }
      });
    }
  }

  goto() {
    this.router.navigate(['/users'])
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

}
