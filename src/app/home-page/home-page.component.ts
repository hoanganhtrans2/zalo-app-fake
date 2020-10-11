import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router,  private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goToChat(){
    this.router.navigate(['./chat'], { relativeTo: this.route });
  }
  goToContact(){
    this.router.navigate(['./contact'], { relativeTo: this.route });
  }
  
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
