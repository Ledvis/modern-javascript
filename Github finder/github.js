class GitHub {
  constructor() {
    this.client_id = '6f34567e1e6efcb224ce';
    this.client_secret = '2e2cbaadd9d84e830b1c5023c0d3af1b83175e1b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`
      https://api.github.com/users/${user}
      ?client_id=${this.client_id}
      &secret_id=${this.client_secret}
    `);
    const reposResponse = await fetch(`
      https://api.github.com/users/${user}/repos
      ?per_page=${this.repos_count}
      &sort=${this.repos_sort}
      &client_id=${this.client_id}
      &secret_id=${this.client_secret}
    `);
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    }
  }
}