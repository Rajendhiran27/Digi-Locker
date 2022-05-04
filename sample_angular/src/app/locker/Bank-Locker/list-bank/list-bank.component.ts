import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank'
import { BankService } from '../bank.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.css']
})
export class ListBankComponent implements OnInit {

  bank: Bank[] | undefined;

  constructor(private bankService: BankService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBank();
  }

  private getBank(){
    this.bankService.getBankList().subscribe(data => {
      this.bank = data;
    });
  }

  BankDetails(id: number){
    this.router.navigate(['bank-details', id]);
  }
  createBank(){
    this.router.navigate(['create-bank']).then((e)=>{
      if(e){
        console.log("Navigation is Successful");
      }else{
        console.log("Navigation is UnSuccessful");
      }
    });
  }
  updateBank(id: number){
    this.router.navigate(['update-bank', id]);
  }

  deleteBank(id: number){
    this.bankService.deleteBank(id).subscribe( data => {
      console.log(data);
      this.getBank();
    })
  }

}
