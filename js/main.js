document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.toLowerCase().trim();

            if (email.includes("sandeep") || email.includes("admin")) {
                alert("Logging in as Master Admin (Sandeep Kumar)");
                window.location.href = "dashboard/admin.html";
            } else {
                alert("Logging in as Sub-Admin");
                window.location.href = "dashboard/client.html";
            }
        });
    }
});
