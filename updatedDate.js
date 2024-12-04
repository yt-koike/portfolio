const desiredRepo = "portfolio";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);

    repos.forEach((repo) => {
      if (repo.name == desiredRepo) {
        var lastUpdated = new Date(repo.updated_at);
        var day = lastUpdated.getUTCDate();
        var month = lastUpdated.getUTCMonth() + 1;
        var year = lastUpdated.getUTCFullYear();
        document.getElementById(
          "#updated"
        ).textContent = `Last updated: ${year}-${month}-${day}`;
      }
    });
  }
};
xhttp.open("GET", "https://api.github.com/users/yt-koike/repos", true);
xhttp.send();
