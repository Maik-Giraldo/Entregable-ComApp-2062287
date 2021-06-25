import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {

  constructor( public auth : AuthService, private route: Router ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



      return new Promise((resolve, reject) => {

        this.auth.isstaff().subscribe(
          login => {
          if (login) {
            resolve(true);
          } else {
            console.log('No eres personal de cocina');
            this.route.navigate(['/']);
            resolve(false);
          }
        });
      });

    }

  }






