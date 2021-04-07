import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-star-form',
  templateUrl: './star-form.component.html',
  styleUrls: ['./star-form.component.css']
})
export class StarFormComponent implements OnInit {
  
  public dec: FormControl;
  public ra: FormControl;
  public story: FormControl;

  constructor() {
    this.dec = new FormControl('');
    this.ra = new FormControl('');
    this.story = new FormControl('');
  }

  ngOnInit(): void {
  }
  
  submitStar(): void {
    console.log(this.dec.value, this.ra.value, this.story.value);
  }

}
