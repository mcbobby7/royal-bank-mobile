import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  user;
  constructor(
    private idle: Idle,
    private keepalive: Keepalive,
    private router: Router,
    private toast: ToastrService
  ) {
    StatusBar.setOverlaysWebView({ overlay: false });
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Light });
    };
    setStatusBarStyleDark();
    StatusBar.setBackgroundColor({
      color: '#ffffff',
    });

    // sets an idle timeout of 10 seconds.
    idle.setIdle(10);

    // sets a timeout period of 10 seconds. after 20 seconds of inactivity, the user will timed out.
    idle.setTimeout(20);

    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => (this.idleState = 'No longer idle.'));

    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log('timed out');
      this.reset();
      if (this.user) {
        this.logout();
        console.log('logout');
      }
    });
    idle.onIdleStart.subscribe(() => (this.idleState = 'idle state'));

    idle.onTimeoutWarning.subscribe(
      (countdown) =>
        (this.idleState = 'You will time out in ' + countdown + ' seconds!')
    ); // sets the ping interval to 15 seconds

    keepalive.interval(15);

    this.reset();
  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  ngOnInit() {
    this.reset();
    setInterval(() => {
      this.user = localStorage.getItem('token');
    }, 500);
  }
  logout() {
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
    this.router.navigate(['/login']);
    this.toast.error('Invalid session timed-out', 'Error');
  }
}
