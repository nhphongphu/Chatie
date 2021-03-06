import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  data: []
  constructor(private http: HttpClient) { }
  async registerAccount(email,userName,password, retypepassword){ 
    let result;
    let temp;
   result = await this.http.post(environment.endpoint+ 'user/createAccount',{
    email:email, 
    userName:userName , 
    password: password,
    retypePass: retypepassword
   }).toPromise().then(data=>{ 
     temp=data;
   })
   return temp
  }
}
 

