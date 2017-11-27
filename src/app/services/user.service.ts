export class UserService {
    private users = [{name: 'Chris', status: false}, {name: 'Manu', status: false}, {name: 'Max', status: true}, {name: 'Ana', status: true}];
    
    switchUser(thename: string){
        const _index = this.users.findIndex(userItem => userItem.name === thename); 
        this.users[_index].status = this.users[_index].status ? false : true;
    } 
    
    public getUsersByStatus(status){
        const result = this.users.filter(user => user.status === status);
        return result;
    }
}