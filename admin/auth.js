// DESI TREND - Admin Authentication Guard

(function () {
    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    // Pages that do not require login
    const publicPages = [
        "login.html",
        "index.html",
        "logout.html"
    ];

    // Check login status
    const isLoggedIn =
        sessionStorage.getItem("adminLoggedIn") === "true";

    // Redirect unauthorized users
    if (!publicPages.includes(currentPage) && !isLoggedIn) {
        window.location.replace("login.html");
    }
})();
