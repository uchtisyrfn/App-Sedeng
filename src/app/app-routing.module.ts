import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterPageModule),
  },
  {
    path: "siapakamu",
    loadChildren: () =>
      import("./siapakamu/siapakamu.module").then((m) => m.SiapakamuPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "beranda",
    loadChildren: () =>
      import("./beranda/beranda.module").then((m) => m.BerandaPageModule),
  },
  {
    path: "isiprofilmu",
    loadChildren: () =>
      import("./isiprofilmu/isiprofilmu.module").then(
        (m) => m.IsiprofilmuPageModule
      ),
  },
  {
    path: "profilgd",
    loadChildren: () =>
      import("./profilgd/profilgd.module").then((m) => m.ProfilgdPageModule),
  },
  {
    path: "sewagd",
    loadChildren: () =>
      import("./sewagd/sewagd.module").then((m) => m.SewagdPageModule),
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./payment/payment.module").then((m) => m.PaymentPageModule),
  },
  {
    path: "chat",
    loadChildren: () =>
      import("./chat/chat.module").then((m) => m.ChatPageModule),
  },
  {
    path: "isiprofilgd",
    loadChildren: () =>
      import("./isiprofilgd/isiprofilgd.module").then(
        (m) => m.IsiprofilgdPageModule
      ),
  },
  {
    path: "mission",
    loadChildren: () =>
      import("./mission/mission.module").then((m) => m.MissionPageModule),
  },
  {
    path: "detail-sedeng/:id",
    loadChildren: () =>
      import("./detail-sedeng/detail-sedeng.module").then(
        (m) => m.DetailSedengPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
