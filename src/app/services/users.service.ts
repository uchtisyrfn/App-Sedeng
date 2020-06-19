import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { mainUrl } from "./config";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<object> {
    return this.http.get(mainUrl + "/api/sedeng");
  }

  getUser(id): Observable<object> {
    return this.http.get(mainUrl + "/api/sedeng/" + id);
  }
}
