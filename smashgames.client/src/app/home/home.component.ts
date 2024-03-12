import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';
import { Studio } from '../Models/studio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  studio$: BehaviorSubject<Studio> = this.data.studio$;

  constructor(private data: DataService) {

  }
}
