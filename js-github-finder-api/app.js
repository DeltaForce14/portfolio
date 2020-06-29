// Auth url https://github.com/settings/applications/1321320
// initializing UI class to be able to use it 
const ui = new UI;

// initiate new Github object
const github = new Github;


// UI Elements
const inputUI = document.getElementById('searchUser');

// Event Listeners 

// listening for KeyUp on Input
// we are using keyup so that we can search for user while we type
inputUI.addEventListener('keyup', (event) => {
    // get text that is typed in 
    const userText = event.target.value;

   
    // input if is not blank do http call to GitHub 
        //make http call
        if(userText != ''){
            github.getUser(userText)
                .then(data => {
                    // if message in profile is not found (no one under the searched name), show alert
                    if(data.profile.message === "Not Found"){
                        ui.showAlert(`No user with name ${inputUI.value}!`, "alert alert-danger");
                    } else {
                    // else  show the profile  
                    // passing data.profile into UI 
                    // and show repos passing it to UI 
                        ui.showProfile(data.profile);
                        ui.showRepo(data.repos);
                    }
                })
        } else {
            //Clear Profile
            // Creting new method in UI class
            ui.clearProfile();
        }

});



