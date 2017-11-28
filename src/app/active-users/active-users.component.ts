import { Component, DoCheck, Input, EventEmitter, OnInit } from '@angular/core'; 
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements DoCheck, OnInit { 
  private users: {name: string, status: boolean}[];
  private titleLine: string;
  @Input('theStatus') compStatus: boolean;

  constructor(private userService: UserService) { }
    
  ngDoCheck(){
    this.users = this.userService.getUsersByStatus(this.compStatus);    
  }
  
  ngOnInit(){
    this.titleLine = this.compStatus ? "Active" : "Inactive";
  }

  userSwitch(name: string){
    this.userService.switchUser(name); 
    this.userService.isUpdated.emit(name);
  }
}
