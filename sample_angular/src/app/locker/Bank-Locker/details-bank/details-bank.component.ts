import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-details-bank',
  templateUrl: './details-bank.component.html',
  styleUrls: ['./details-bank.component.css']
})
export class DetailsBankComponent implements OnInit {
  id!: number;
  bank!:Bank

  constructor(private route: ActivatedRoute, private bankService: BankService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bank = new Bank();
    this.bankService.getBankById(this.id).subscribe( data => {
      this.bank = data;
    });
  }

}
