function fetchGitHubInformation() {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please entera Github username</h2>`);
        return;
    }
    $("#gh-user-data").html(
        `<div id="loader">
          <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);
}