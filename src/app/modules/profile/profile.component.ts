import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/http/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  loading = false;
  show: boolean;
  page = 'select';
  age = 'select';
  bvn = '';
  firstName;
  middleName;
  lastName;
  data: any = {};
  success = false;
  constructor(
    private router: Router,
    public toast: ToastrService,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  viewpassword() {
    this.show = !this.show;
  }
  change(mode) {
    this.page = mode;
  }

  fetchBvn() {
    console.log(this.bvn);
    if (this.bvn.length === 11) {
      this.loading = true;

      const data = {
        bvn: this.bvn,
        show_detail: true,
      };
      this.auth.post(data, 'Nibss.BvnService.ValidateBvn').subscribe(
        (res: any) => {
          this.loading = false;
          console.log(res);

          if (res.data.bvn) {
            console.log(res);
            this.success = true;
            this.data = res.data;
            const name = res.data.fullName.split(' ');
            this.firstName = name[0];
            this.middleName = name[1];
            this.lastName = name[2];
          } else {
            this.toast.error('BVN not found', 'Error');
          }
        },
        (err) => {
          this.toast.error('Check your internet connection', 'Error');
          this.loading = false;
        }
      );
    } else {
      this.success = false;
      this.data = {};
      this.firstName = '';
      this.middleName = '';
      this.lastName = '';
      return;
    }
  }

  update() {
    if (this.user.bvn) {
      this.toast.error('BVN already updated', 'Error');
      return false;
    }
    this.loading = true;
    if (this.data === {}) {
      this.toast.error('No record, please try again', 'Error');
      return;
    }
    const data = {
      Id: this.user.userId,
      FirstName: this.firstName,
      LastName: this.lastName,
      MiddleName: this.middleName,
      Phone: this.data.phoneNo,
      Email: this.data.emailAddress,
      BVN: this.bvn,
      BVNStatus: 'Verified',
      DOB: this.data.dateOfBirth,
      Gender: this.data.gender,
    };
    this.auth.post(data, 'UserManager.UserService.UpdateProfile').subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res);

        if (res.data.responseCode === '00') {
          console.log(res);
          this.toast.success('BVN updated successfully', 'Success');
          this.user.hasBVN = true;
          this.user.bvn = this.bvn;
          this.user.firstName = this.firstName;
          this.user.lastName = this.lastName;
          this.user.middleName = this.middleName;
          this.user.phone = this.data.phoneNo;
          this.user.email = this.data.emailAddress;
          this.user.dob = this.data.dateOfBirth;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.router.navigate(['/dashboard']);
        } else {
          this.toast.error(res.data.responseMessage, 'Error');
        }
      },
      (err) => {
        this.toast.error('Check your internet connection', 'Error');
        this.loading = false;
      }
    );
  }
}
