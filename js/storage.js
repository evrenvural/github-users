class Storage {
    static getSearchedUsers(){
        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;
    }

    static addSearchedUser(userName){
        let users = this.getSearchedUsers();
        
        if(users.indexOf(userName) === -1){
            users.push(userName);
        }

        localStorage.setItem("searched", JSON.stringify(users));
    }

    static clearAllSearched(){
        localStorage.removeItem("searched");
    }
}