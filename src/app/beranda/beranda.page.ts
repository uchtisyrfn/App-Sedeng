import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-beranda",
  templateUrl: "./beranda.page.html",
  styleUrls: ["./beranda.page.scss"],
})
export class BerandaPage implements OnInit {
  listUsers: any = [];

  constructor(private usersService: UsersService, private router: Router) {}

  getAllUsers() {
    this.usersService.getAllUsers().subscribe(
      (response) => {
        this.listUsers = response;
      },
      (err) => {
        this.listUsers = [];
      }
    );
  }

  goDetail(item) {
    this.router.navigate(["/detail-sedeng/" + item.id]);
  }

  ionViewWillEnter() {
    this.getAllUsers();
  }

  doRefresh(event) {
    this.getAllUsers();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {}
}
