const githubForm = $("#github-form");
const nameInput = $("#githubname");
const clearLastUsers = $("#clear-last-users");
const lastUsers = $("#last-users");
const github = new Github();

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
                // HATA
            }
            else{
                console.log(response);
            }
        })
        .catch(error => console.error(error));
    }
}

function clearAllSearched(){

}

function getAllSearched(){

}