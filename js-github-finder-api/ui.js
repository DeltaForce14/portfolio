

class UI {
    constructor(){
        // grabbing profile placeholder
        this.profilePlace = document.getElementById('profile');
    }

    showProfile(user){
        //image source coming from api
        //img-fluid to fit it hte column
        //at the bottom there is placeholder for latest repos created, id="latest-repos"
        this.profilePlace.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="mb-2 img-fluid" src="${user.avatar_url}"> 
                    <a href="${user.html_url}"  target="_blank" class="btn btn-primary mb-3">Go to Profile</a>
                </div>
                <div class="col-md-9">
                    <ul class="list-group text-left">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                    <br><br>
                    <span class="badge badge-primary mb-1">Public Repos ${user.public_repos}</span>
                    <span class="badge badge-secondary mb-1">Public Gists ${user.public_gists}</span>
                    <span class="badge badge-success mb-1">Followers ${user.followers}</span>
                    <span class="badge badge-info mb-1">Following ${user.following}</span>
                </div>
            </div>
        </div>
        <h3>Latest Repos</h3>
        <div id="latest-repos"></div>
        `
    }

    showRepo(repos){
        let output = '';
        repos.forEach((repo) => 
            output += `
                <div class="card card-body mb-1">
                    <div class="row">
                        <div class="col-md-6 text-left">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6 text-left">
                            <span class="badge badge-primary mb-1">Stars ${repo.starsgazers_count}</span>
                            <span class="badge badge-secondary mb-1">Watchers ${repo.watchers_count}</span>
                            <span class="badge badge-success mb-1">Forks ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `);

        //output repos
        document.querySelector('#latest-repos').innerHTML = output;    
    }

    // show alert when user's name typed does not exist
    showAlert(message, className){
        // using clear alert method
        this.clearAlert();

        //create div
        const div = document.createElement("div");
        // add classees
        div.className = className;
        //add role attribute (Bootstrap)
        div.setAttribute("role","alert");
        //append message 
        div.appendChild(document.createTextNode(message));
        //get parent element to append under
        const container = document.querySelector('.searchContainer');
        //get search box
        const searchBox = document.querySelector('.search');
        // append alert before SearchBox
        container.insertBefore(div,searchBox);

        //setting alert to alert message using clearAlert()
        setTimeout(() => {
            this.clearAlert()}, 3000);

    }

    //clear alert message, prevent showing multiple alert messages
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    // clear profile filed when the input text is deleted
    clearProfile(){
        this.profilePlace.innerHTML = "";
    }
}


//zzdddd
