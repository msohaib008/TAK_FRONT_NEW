import { Injectable } from '@angular/core';    
import {HttpClient} from '@angular/common/http';    

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private readonly APIUrl = "https://localhost:44342/api";  
  constructor(private http: HttpClient) { }

  RegisterUser(val: any) {  
    return this.http.post(this.APIUrl + '/Authenticate/Register-Admin', val);  
  }

  LoginUser(val: any){
    return this.http.post(this.APIUrl + '/Authenticate/login', val);  
  }

  GetUserRoles(){
    return this.http.get(this.APIUrl+ '/RoleAccess/Get-Roles-List');
  }

  RegisterInvestorUser(val: any){
    return this.http.post(this.APIUrl + '/Authenticate/Register-Investor', val);  
  }

  RegisterEnterpreneurUser(val: any){
    return this.http.post(this.APIUrl + '/Authenticate/Register-Entrepreneur', val);  
  }

  RegisterSkilledUser(val: any){
    return this.http.post(this.APIUrl + '/Authenticate/Register-SkilledPerson', val);  
  }


}
