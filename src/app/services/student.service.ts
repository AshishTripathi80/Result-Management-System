import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getResulsByRollnumberAndDob(rollNumber:number, dob:number):Observable<any>{
    return this.http.get(`http://localhost:3000/students?rollNumber=${rollNumber}&dob=${dob}`)
  }
}
