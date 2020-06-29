// Fetch Data from GitHub
// using async and await ES7

class Github {
    // this.repos_sort = 'created: asc'; used to sort repos from latest down
    constructor() {
      this.repos_count = 5;
      this.client_id = '2fae3fabedd4facb646a';
      this.client_secret = '73c40d007ab630bf5c237cc833c43e225e5154da';
      this.repos_sort = 'created: asc';
    }
  
    // get user method
    async getUser(user) {

   const profileResponse = await fetch(
    `https://api.github.com/users/${user}`, 
    {
      headers: {
        authorization: "token 7f007f75ef7dfabe4f051ace71f79da19ea7a933"
      }
    }
  )
  const repoResponse = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
    {
      headers: {
        authorization: "token 7f007f75ef7dfabe4f051ace71f79da19ea7a933"
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