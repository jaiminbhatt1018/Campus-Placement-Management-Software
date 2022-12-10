import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyApisService } from 'src/app/services/company-apis.service';
@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss'],
})
export class CompanyRegistrationComponent implements OnInit {
  companyName!: String;
  companyAddress!: String;
  companyContactNo!: Number;
  companyWebsite!: String;
  companyDomain!: String;
  companyPassword!:String;
  companyEmail!: String;
  constructor(private services:CompanyApisService , private router: Router) {
    
    }

  ngOnInit(): void {}
  handleSubmit() {
    let company = {
      name: this.companyName,
      address: this.companyAddress,
      contactNo: this.companyContactNo,
      domain: this.companyDomain,
      email: this.companyEmail,
      password:this.companyPassword,
      website: this.companyWebsite
    };
    this.services.registerCompany(company).subscribe((data)=>{
      this.router.navigate(['registration/companylogin'])
    })
  }
}