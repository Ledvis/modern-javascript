const github = new GitHub;
const ui = new UI;
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', function() {
  const userText = this.value;
  if (userText !== '') {
    github
      .getUser(userText)
      .then(user => {
        if (user.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(user.profile);
          ui.showRepos(user.repos);
        }
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});