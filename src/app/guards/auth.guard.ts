import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private storage: Storage
  ) { }

  canActivate(): Promise<boolean> {
    const promise = this.auth.checkAuth()

    promise
      .then(status => {
        if(status) return true;

        return this.storage
          .get('intro-done')
          .then(val => {
            if (val == 'done') {
              this.router.navigate(['auth']);
            } else {
              this.router.navigate(['intro-slides'])
            }

            return false;
          });
      })
      .catch(err => {
        return err;
      })

    return promise;
  }
  
}
