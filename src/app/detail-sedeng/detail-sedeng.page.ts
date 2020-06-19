import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../services/users.service";
import { mainUrl } from "../services/config";

@Component({
  selector: "app-detail-sedeng",
  templateUrl: "./detail-sedeng.page.html",
  styleUrls: ["./detail-sedeng.page.scss"],
})
export class DetailSedengPage implements OnInit {
  user: any = {};
  id = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  getData() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.usersService.getUser(this.id).subscribe((response) => {
      this.user = response;
    });
  }

  ionViewWillEnter() {
    this.getData();
  }

  ngOnInit() {}
}
