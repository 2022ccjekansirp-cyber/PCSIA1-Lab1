/* ==========================================
   ST. ELIZABETH HOSPITAL
   HOSPITAL DATABASE MANAGEMENT SYSTEM
   Developed by: Rolandj P. Kansi
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const welcomePage =
    document.getElementById("welcomePage");

const dashboardPage =
    document.getElementById("dashboardPage");

const getStartedBtn =
    document.getElementById("getStartedBtn");

const logoutBtn =
    document.getElementById("logoutBtn");

const navItems =
    document.querySelectorAll(".nav-item");

const contentSections =
    document.querySelectorAll(".content-section");

const pageTitle =
    document.getElementById("pageTitle");

const pageSubtitle =
    document.getElementById("pageSubtitle");


/* ==========================================
   GET STARTED BUTTON
========================================== */

if (getStartedBtn) {

    getStartedBtn.addEventListener("click", function () {

        welcomePage.classList.add("hidden");

        dashboardPage.classList.remove("hidden");

        showSection("dashboard");

    });

}


/* ==========================================
   NAVIGATION BUTTONS
========================================== */

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const sectionName =
            item.getAttribute("data-section");

        showSection(sectionName);

    });

});


/* ==========================================
   SHOW SECTION
========================================== */

function showSection(sectionName) {

    contentSections.forEach(function (section) {

        section.classList.remove("active-section");

    });


    navItems.forEach(function (item) {

        item.classList.remove("active");

    });


    const selectedSection =
        document.getElementById(sectionName);


    if (selectedSection) {

        selectedSection.classList.add(
            "active-section"
        );

    }


    const selectedNav =
        document.querySelector(
            `.nav-item[data-section="${sectionName}"]`
        );


    if (selectedNav) {

        selectedNav.classList.add("active");

    }


    updatePageTitle(sectionName);

}


/* ==========================================
   PAGE TITLES
========================================== */

function updatePageTitle(sectionName) {

    const titles = {

        dashboard:
            "Dashboard",

        patients:
            "Patient Records",

        doctors:
            "Doctors & Medical Staff",

        appointments:
            "Appointments",

        laboratory:
            "Laboratory",

        pharmacy:
            "Pharmacy",

        billing:
            "Billing & Payments",

        reports:
            "Hospital Reports"

    };


    const subtitles = {

        dashboard:
            "Hospital Database Management System",

        patients:
            "Manage registered hospital patients.",

        doctors:
            "Manage doctors and medical personnel.",

        appointments:
            "View and manage patient appointments.",

        laboratory:
            "Manage laboratory requests and test results.",

        pharmacy:
            "Manage medicines and prescriptions.",

        billing:
            "Manage hospital charges and payments.",

        reports:
            "View hospital database summaries and reports."

    };


    if (pageTitle) {

        pageTitle.textContent =
            titles[sectionName] || "Dashboard";

    }


    if (pageSubtitle) {

        pageSubtitle.textContent =
            subtitles[sectionName] ||
            "St. Elizabeth Hospital";

    }

}


/* ==========================================
   LOGOUT
========================================== */

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout =
            confirm(
                "Are you sure you want to logout?"
            );


        if (confirmLogout) {

            dashboardPage.classList.add("hidden");

            welcomePage.classList.remove("hidden");

        }

    });

}


/* ==========================================
   ADD PATIENT
========================================== */

function addPatient() {

    const name =
        prompt("Enter patient's full name:");

    if (!name) {
        return;
    }


    const age =
        prompt("Enter patient's age:");

    if (!age) {
        return;
    }


    const gender =
        prompt("Enter patient's gender:");

    if (!gender) {
        return;
    }


    const contact =
        prompt("Enter patient's contact number:");

    if (!contact) {
        return;
    }


    const table =
        document.querySelector(
            "#patientTable tbody"
        );


    if (!table) {

        alert("Patient table could not be found.");

        return;

    }


    const patientNumber =
        table.rows.length + 1;


    const patientId =
        "P-" +
        String(patientNumber).padStart(3, "0");


    const newRow =
        table.insertRow();


    newRow.innerHTML = `
        <td>${patientId}</td>

        <td>${escapeHTML(name)}</td>

        <td>${escapeHTML(age)}</td>

        <td>${escapeHTML(gender)}</td>

        <td>${escapeHTML(contact)}</td>

        <td>
            <span class="status active">
                Active
            </span>
        </td>
    `;


    alert(
        "Patient successfully registered!"
    );

}


/* ==========================================
   SEARCH PATIENTS
========================================== */

function searchPatients() {

    const searchInput =
        document.getElementById(
            "patientSearch"
        );


    if (!searchInput) {
        return;
    }


    const searchValue =
        searchInput.value
            .toLowerCase()
            .trim();


    const rows =
        document.querySelectorAll(
            "#patientTable tbody tr"
        );


    rows.forEach(function (row) {

        const rowText =
            row.textContent.toLowerCase();


        if (
            rowText.includes(searchValue)
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


/* ==========================================
   ADD DOCTOR
========================================== */

function addDoctor() {

    const doctorName =
        prompt("Enter doctor's name:");

    if (!doctorName) {
        return;
    }


    const specialization =
        prompt("Enter specialization:");

    if (!specialization) {
        return;
    }


    alert(
        "Doctor information saved successfully!\n\n" +

        "Doctor: " +
        doctorName +

        "\nSpecialization: " +
        specialization
    );

}


/* ==========================================
   ADD APPOINTMENT
========================================== */

function addAppointment() {

    const patient =
        prompt("Enter patient name:");

    if (!patient) {
        return;
    }


    const doctor =
        prompt("Enter doctor name:");

    if (!doctor) {
        return;
    }


    const date =
        prompt("Enter appointment date:");

    if (!date) {
        return;
    }


    const time =
        prompt("Enter appointment time:");

    if (!time) {
        return;
    }


    alert(
        "Appointment created successfully!\n\n" +

        "Patient: " +
        patient +

        "\nDoctor: " +
        doctor +

        "\nDate: " +
        date +

        "\nTime: " +
        time
    );

}


/* ==========================================
   LABORATORY
========================================== */

function addLabRequest() {

    const patient =
        prompt("Enter patient name:");

    if (!patient) {
        return;
    }


    const test =
        prompt("Enter laboratory test:");

    if (!test) {
        return;
    }


    alert(
        "Laboratory request created successfully!\n\n" +

        "Patient: " +
        patient +

        "\nTest: " +
        test
    );

}


/* ==========================================
   PHARMACY
========================================== */

function addMedicine() {

    const medicine =
        prompt("Enter medicine name:");

    if (!medicine) {
        return;
    }


    const stock =
        prompt("Enter stock quantity:");

    if (!stock) {
        return;
    }


    alert(
        "Medicine added successfully!\n\n" +

        "Medicine: " +
        medicine +

        "\nStock: " +
        stock
    );

}


/* ==========================================
   BILLING
========================================== */

function createBill() {

    const patient =
        prompt("Enter patient name:");

    if (!patient) {
        return;
    }


    const amount =
        prompt("Enter bill amount:");

    if (!amount) {
        return;
    }


    alert(
        "Bill created successfully!\n\n" +

        "Patient: " +
        patient +

        "\nAmount: ₱" +
        amount
    );

}


/* ==========================================
   REPORTS
========================================== */

function generateReport(reportType) {

    alert(
        reportType +
        " Report generated successfully!\n\n" +

        "This is a prototype feature. " +

        "It can later be connected to the " +

        "hospital database."
    );

}


/* ==========================================
   VIEW INFORMATION
========================================== */

function viewMessage(type) {

    alert(
        type +
        " will be displayed here.\n\n" +

        "This feature is part of the " +

        "hospital system prototype."
    );

}


/* ==========================================
   SECURITY
   Prevent HTML injection when adding
   patient information.
========================================== */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ==========================================
   INITIAL STATE
========================================== */

if (welcomePage) {

    welcomePage.classList.remove("hidden");

}


if (dashboardPage) {

    dashboardPage.classList.add("hidden");

}

// =========================================================
// TASK 6 - DATA INPUT VALIDATION FOR USER & SYSTEM FORMS
// =========================================================
document.addEventListener("DOMContentLoaded", function () {

    const addUserForm = document.getElementById("addUserForm");
    const accessAssignmentForm = document.getElementById("accessAssignmentForm");
    const systemLoginForm = document.getElementById("systemLoginForm");

    // Today's date is used to prevent past expiration dates.
    const today = new Date();
    const todayISO = today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    const expirationDate = document.getElementById("expirationDate");
    if (expirationDate) {
        expirationDate.min = todayISO;
    }

    function addMessage(field, message) {
        let messageEl = field.parentElement.querySelector(".validation-message");
        if (!messageEl) {
            messageEl = document.createElement("small");
            messageEl.className = "validation-message";
            field.parentElement.appendChild(messageEl);
        }
        messageEl.textContent = message;
        messageEl.classList.toggle("show", Boolean(message));
    }

    function setFieldState(field, valid, message) {
        if (!field) return valid;
        field.classList.toggle("validation-valid", valid);
        field.classList.toggle("validation-invalid", !valid);
        addMessage(field, valid ? "" : message);
        return valid;
    }

    function validateRequired(field, label) {
        return setFieldState(field, field.value.trim() !== "", label + " is required.");
    }

    function validateOnBlur(field, validator) {
        if (!field) return;
        field.addEventListener("blur", function () {
            validator();
        });
        field.addEventListener("input", function () {
            if (field.classList.contains("validation-invalid")) validator();
        });
        field.addEventListener("change", function () {
            validator();
        });
    }

    // -------------------------
    // FORM 1 - ADD USER
    // -------------------------
    if (addUserForm) {
        const username = document.getElementById("adminUsername");
        const email = document.getElementById("adminEmail");
        const department = document.getElementById("adminDepartment");
        const password = document.getElementById("initialPassword");
        const status = document.getElementById("userStatus");

        const validateUsername = function () {
            const value = username.value.trim();
            if (!value) return setFieldState(username, false, "Username is required.");
            if (value.length < 4) return setFieldState(username, false, "Username must be at least 4 characters.");
            if (value.length > 20) return setFieldState(username, false, "Username must not exceed 20 characters.");
            if (!/^[A-Za-z0-9._-]+$/.test(value)) return setFieldState(username, false, "Use only letters, numbers, dots, underscores, or hyphens.");
            return setFieldState(username, true, "");
        };

        const validateEmail = function () {
            const value = email.value.trim();
            if (!value) return setFieldState(email, false, "Email address is required.");
            if (!email.validity.valid) return setFieldState(email, false, "Enter a valid email address, for example name@example.com.");
            return setFieldState(email, true, "");
        };

        const validateDepartment = function () {
            return setFieldState(department, department.value !== "", "Please select a department.");
        };

        const validatePassword = function () {
            const value = password.value;
            if (!value) return setFieldState(password, false, "Initial password is required.");
            if (value.length < 8) return setFieldState(password, false, "Password must contain at least 8 characters.");
            if (value.length > 64) return setFieldState(password, false, "Password must not exceed 64 characters.");
            return setFieldState(password, true, "");
        };

        const validateStatus = function () {
            return setFieldState(status, status.value !== "", "Please select a status.");
        };

        validateOnBlur(username, validateUsername);
        validateOnBlur(email, validateEmail);
        validateOnBlur(department, validateDepartment);
        validateOnBlur(password, validatePassword);
        validateOnBlur(status, validateStatus);

        addUserForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const valid = validateUsername() &&
                validateEmail() &&
                validateDepartment() &&
                validatePassword() &&
                validateStatus();

            if (!valid) {
                alert("Please correct the highlighted fields before adding the user.");
                const firstInvalid = addUserForm.querySelector(".validation-invalid");
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const usernameValue = username.value.trim();
            const emailValue = email.value.trim();

            alert(
                "User added successfully!\n\n" +
                "Username: " + usernameValue + "\n" +
                "Email: " + emailValue + "\n" +
                "Department: " + department.value + "\n" +
                "Status: " + status.value
            );

            addUserForm.reset();
            addUserForm.querySelectorAll(".validation-valid, .validation-invalid").forEach(function (field) {
                field.classList.remove("validation-valid", "validation-invalid");
            });
            addUserForm.querySelectorAll(".validation-message").forEach(function (message) {
                message.classList.remove("show");
                message.textContent = "";
            });
        });
    }

    // -------------------------
    // FORM 2 - ROLE & ACCESS
    // -------------------------
    if (accessAssignmentForm) {
        const userId = document.getElementById("accessUserId");
        const expiration = document.getElementById("expirationDate");
        const rights = Array.from(document.querySelectorAll('input[name="accessRights"]'));
        const rightsGroup = accessAssignmentForm.querySelector(".checkbox-group");

        const validateUserId = function () {
            return setFieldState(userId, userId.value !== "", "Please select a User ID.");
        };

        const validateExpiration = function () {
            if (!expiration.value) return setFieldState(expiration, false, "Expiration date is required.");
            if (expiration.value < todayISO) return setFieldState(expiration, false, "Expiration date cannot be a previous date.");
            return setFieldState(expiration, true, "");
        };

        const validateRights = function () {
            const selected = rights.some(function (checkbox) { return checkbox.checked; });
            if (rightsGroup) rightsGroup.classList.toggle("validation-invalid", !selected);
            return selected;
        };

        validateOnBlur(userId, validateUserId);
        validateOnBlur(expiration, validateExpiration);
        rights.forEach(function (checkbox) {
            checkbox.addEventListener("change", function () {
                validateRights();
                if (rights.some(function (item) { return item.checked; }) && rightsGroup) {
                    rightsGroup.classList.remove("validation-invalid");
                }
            });
        });

        accessAssignmentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const validUser = validateUserId();
            const validDate = validateExpiration();
            const validRights = validateRights();

            if (!validRights) {
                alert("Please select at least one access right (Read, Write, Execute, or Admin).");
            }

            if (!validUser || !validDate || !validRights) {
                if (!validUser) userId.focus();
                else if (!validDate) expiration.focus();
                return;
            }

            const selectedRights = rights.filter(function (checkbox) {
                return checkbox.checked;
            }).map(function (checkbox) {
                return checkbox.value;
            });

            alert(
                "Access assigned successfully!\n\n" +
                "User: " + userId.value + "\n" +
                "Access Rights: " + selectedRights.join(", ") + "\n" +
                "Expiration Date: " + expiration.value
            );

            accessAssignmentForm.reset();
            accessAssignmentForm.querySelectorAll(".validation-valid, .validation-invalid").forEach(function (field) {
                field.classList.remove("validation-valid", "validation-invalid");
            });
            if (rightsGroup) rightsGroup.classList.remove("validation-invalid");
        });
    }

    // -------------------------
    // FORM 3 - SYSTEM LOGIN
    // -------------------------
    if (systemLoginForm) {
        const loginUsername = document.getElementById("loginUsername");
        const loginPassword = document.getElementById("loginPassword");

        const validateLoginUsername = function () {
            const value = loginUsername.value.trim();
            if (!value) return setFieldState(loginUsername, false, "Username or email is required.");
            return setFieldState(loginUsername, true, "");
        };

        const validateLoginPassword = function () {
            const value = loginPassword.value;
            if (!value) return setFieldState(loginPassword, false, "Password is required.");
            if (value.length < 8) return setFieldState(loginPassword, false, "Password must contain at least 8 characters.");
            return setFieldState(loginPassword, true, "");
        };

        validateOnBlur(loginUsername, validateLoginUsername);
        validateOnBlur(loginPassword, validateLoginPassword);

        systemLoginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const valid = validateLoginUsername() && validateLoginPassword();

            if (!valid) {
                alert("Please correct the highlighted fields before logging in.");
                const firstInvalid = systemLoginForm.querySelector(".validation-invalid");
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            alert("Login submitted successfully for: " + loginUsername.value.trim());

            if (!document.getElementById("rememberMe").checked) {
                systemLoginForm.reset();
                systemLoginForm.querySelectorAll(".validation-valid, .validation-invalid").forEach(function (field) {
                    field.classList.remove("validation-valid", "validation-invalid");
                });
            }
        });
    }
});

