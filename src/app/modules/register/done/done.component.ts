import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/http/services/auth.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  source1 = 'assets/icon/royalL.png';

  source = 'assets/icon/royalty.png';
  imageSrc = 'assets/icon/phoneA.png';
  id: any = localStorage.getItem('stageId');
  onboardingForm!: FormGroup;
  user: any = {};
  loading = true;
  constructor(
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService,
    public navController: NavController
  ) {}
  getOnboardingStage() {
    if (this.id) {
      this.auth
        .post({ UserId: this.id }, 'UserManager.UserService.FetchUserDetail')
        .subscribe(
          (res: any) => {
            this.loading = false;
            if (res.data.responseCode === '00') {
              // this.process = res.data.userDetail;
              this.user = res.data.userDetail;

              console.log(res);
              console.log(this.onboardingForm.value);
            } else {
              console.log(res);
              this.router.navigate(['/register']);
              this.toast.error('Please try again', 'Error');
            }
          },
          (err) => {
            this.router.navigate(['/register']);
            this.toast.error('Please try again', 'Error');
          }
        );
    } else {
      this.router.navigate(['/register/register']);
    }

    return;
  }

  ngOnInit() {
    this.getOnboardingStage();
  }
  sign() {
    this.router.navigate(['/login']);
  }
  create() {
    this.router.navigate(['/dashboard']);
  }
}
