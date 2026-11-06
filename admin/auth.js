(function () {

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const publicPages = [
        "login.html",
        "index.html"
    ];

    const isLoggedIn =
        sessionStorage.getItem("adminLoggedIn") === "true";

    // Protect Admin Pages

    if (
        !publicPages.includes(currentPage) &&
        !isLoggedIn
    ) {

        window.location.replace("login.html");

    }

})();
