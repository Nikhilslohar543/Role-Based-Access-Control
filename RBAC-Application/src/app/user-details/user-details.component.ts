import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  newid: any;
  tempdata: any[] = [];

  ngOnInit(): void {

    this.route.paramMap.subscribe((param => {
      this.newid = param.get('id');
      this.loaduser();
    }))

  }

  loaduser() {

    this.service.getUserById(this.newid).subscribe((data) => {
      this.tempdata = [JSON.parse(data)];
      console.log("Fetched data:", this.tempdata)
    })

  }


  goto() {

    this.router.navigate(['/users'])

  }

  update(id: any) {

    this.router.navigate(['/edituser', this.newid])

  }

  delete(id: any) {

    if (window.confirm('Are you sure you want to delete this User?')) {

      this.service.deleteUser(this.newid).subscribe({
        next: (data) => {
          console.log(data)
          alert(data);
          this.router.navigate(['/users'])
        },
        error: (error) => {
          alert(error.error);
        }
      });

    }
  }

}
