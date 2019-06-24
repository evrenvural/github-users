const githubForm = $("#github-form");
const nameInput = $("#githubname");
const clearLastUsers = $("#clear-last-users");
const lastUsers = $("#last-searched");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.submit(getData);
    clearLastUsers.click(clearAllSearched);
    $(document).ready(getAllSearched);
}

function getData(e){
    e.preventDefault();
    
    const userName = nameInput.val().trim();

    if(userName == ""){
        alert("Lütfen geçerli bir kullanıcı adı giriniz...");
    }
    else{
        github.getGithubData(userName)
        .then(response => {
            if(response.user.message === "Not Found"){
                ui.showError("Kullanıcı bulunamadı...");
            }
            else{
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
                ui.addSearchedUser(userName);
                Storage.addSearchedUser(userName);  
            }
        })
        .catch(error => ui.showError(error));
    }

    ui.clearInput();
}

function clearAllSearched(){
    Storage.clearAllSearched();
    ui.clearAllSearched(); 
}

function getAllSearched(){
    let users = Storage.getSearchedUsers();
    let result = "";
    users.forEach(user=>{
        ui.addSearchedUser(user);
        result += `<li class="list-group-item">${user}</li>`
    });

    lastUsers.html(result);
}