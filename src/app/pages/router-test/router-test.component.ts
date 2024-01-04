import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-test',
  templateUrl: './router-test.component.html',
  styleUrls: ['./router-test.component.scss'],
})
export class RouterTestComponent implements OnInit {
  public paramVal: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramVal = this.route.snapshot.paramMap.get('param');
  }
}
