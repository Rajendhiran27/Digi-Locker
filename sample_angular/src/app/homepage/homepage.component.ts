import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  credential(){
    this.router.navigate(['/employees']);
  }
  bank(){
    this.router.navigate(['/bank-list']);
  }
  media(){
    this.router.navigate(['/media-locker'])
  }
}
