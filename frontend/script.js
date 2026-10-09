const registerForm = document.querySelector("#registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#fullName").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const password = document.querySelector("#password").value;
        const confirmPassword =
            document.querySelector("#confirmPassword").value;

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        if (password.length < 6) {
            alert("Password must contain at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match.");
            return;
        }

        // Save student profile details

const studentProfile = {

    name: name,

    email: email,

    phone: phone,

    registerNumber:
        document.querySelector("#registerNumber").value.trim(),

    college:
        document.querySelector("#collegeName").value.trim(),

    department:
        document.querySelector("#department").value,

    year:
        document.querySelector("#year").value,

    skills:
        document.querySelector("#skills").value.trim()

};

localStorage.setItem(
    "studentProfile",
    JSON.stringify(studentProfile)
);

alert("Registration successful!");

window.location.href = "login.html";
    });
}

// Login Form

const loginForm = document.querySelector("#loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value;

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        if (password.length < 6) {
            alert("Password must contain at least 6 characters.");
            return;
        }

        alert("Login successful!");

        window.location.href = "dashboard.html";
    });
}

// Job Search

const searchBox = document.querySelector("#jobSearch");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const searchText = searchBox.value.toLowerCase();

        const jobCards = document.querySelectorAll(".job-card");

        jobCards.forEach(function (card) {

            const jobText = card.textContent.toLowerCase();

            if (jobText.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });
    });
}

 function applyJob(jobName) {

    let applications =
        JSON.parse(localStorage.getItem("applications")) || [];

    // Check if already applied
    const alreadyApplied = applications.some(function(application) {
        return application.jobName === jobName;
    });

    if (alreadyApplied) {
        alert("You have already applied for this job!");
        return;
    }

    // New application
    const application = {
        jobName: jobName,
        status: "Applied"
    };

    applications.push(application);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    alert(
        "Application submitted successfully for "
        + jobName
        + "!"
    );

    window.location.href = "applications.html";
}