// Fetch Data from GitHub
// using async and await ES7

class Github {
    // this.repos_sort = 'created: asc'; used to sort repos from latest down
    constructor() {
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    // get user method
    async getUser(user) {

   const profileResponse = await fetch(
    `https://api.github.com/users/${user}`, 
    {
      headers: {
        authorization: "token "
      }
    }
  )
  const repoResponse = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
    {
      headers: {
        authorization: "token "
      }
    }
  )

  const profileData = await profileResponse.json();
  const repoData = await repoResponse.json();
  
      return {
        profile: profileData,
        repos: repoData,
      }

  }
}



//`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
