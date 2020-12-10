import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate,CanLoad {

  constructor(private usuSer: UsuariosService){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    return  this.usuSer.validaToken() ;
  }



  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
  
      return  this.usuSer.validaToken() ;
    }

}
 