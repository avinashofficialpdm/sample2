import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private serv:EmployeeService,private _route:ActivatedRoute) { }

  ngOnInit() {
 
  }


}
