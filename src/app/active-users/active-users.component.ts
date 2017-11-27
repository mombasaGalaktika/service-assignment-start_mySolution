import { Component, DoCheck, Input } from '@angular/core'; 
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements DoCheck { 
  private users: {name: string, status: boolean}[];
  @Input('theStatus') compStatus: boolean;

  constructor(private userService: UserService) {}
    
  ngDoCheck(){
    this.users = this.userService.getUsersByStatus(this.compStatus);    
  }

  userSwitch(name: string){
    this.userService.switchUser(name);
  }
}
