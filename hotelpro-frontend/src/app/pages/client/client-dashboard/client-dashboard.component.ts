import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { CrudService } from '../../../core/services/crud.service';
import { APIConstant } from '../../../core/constants/APIConstant';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css',
})
export class ClientDashboardComponent {
  userInfo: any;
  dashboardData: any;
  activePropertyUnit = 0;
  constructor(
    private authService: AuthService,
    private router: Router,
    private crudService: CrudService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo()?.user;
    console.log(this.userInfo);
    let obj = {};
    if (this.userInfo.userType == 'manager') {
      obj = { accessPropertyUnitIds: this.userInfo.accessPropertyUnitIds };
    } else {
      obj = { propertyId: this.userInfo.propertyId };
    }

    this.crudService
      .post(APIConstant.READ_CLIENT_DASHBOARD, obj)
      .then((response: any) => {
        this.dashboardData = response.data;
        for (let p of this.dashboardData?.property?.propertyUnits) {
          this.activePropertyUnit += p.active == true ? 1 : 0;
        }
        console.log(this.dashboardData);
      })
      .catch((error) => {
        this.alertService.errorAlert(error?.error?.message || error.message);
      });
  }

  addPropertyUnit() {
    this.router.navigate(['/property-setup/ADD']);
  }

  editPropertyUnit(propertyUnitId: any) {
    this.router.navigate(['/property-setup', propertyUnitId]);
  }

  manageUser(propertyUnitId: any) {
    this.router.navigate(['/manage-user', propertyUnitId]);
  }
}
