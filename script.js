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
// TASK 6 + TASK 7 - VALIDATION, DATA STORAGE & RECORD MANAGEMENT
// =========================================================
document.addEventListener("DOMContentLoaded", function () {

    const addUserForm = document.getElementById("addUserForm");
    const accessAssignmentForm = document.getElementById("accessAssignmentForm");
    const systemLoginForm = document.getElementById("systemLoginForm");
    const expirationDate = document.getElementById("expirationDate");

    const STORAGE_KEYS = {
        users: "stElizabeth_users",
        access: "stElizabeth_accessAssignments",
        logins: "stElizabeth_loginActivity"
    };

    const today = new Date();
    const todayISO = today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    if (expirationDate) expirationDate.min = todayISO;

    function readRecords(key, defaults) {
        try {
            const saved = localStorage.getItem(key);
            if (saved !== null) return JSON.parse(saved);
        } catch (error) {
            console.warn("Could not read saved records:", error);
        }
        localStorage.setItem(key, JSON.stringify(defaults));
        return defaults;
    }

    function saveRecords(key, records) {
        localStorage.setItem(key, JSON.stringify(records));
    }

    let users = readRecords(STORAGE_KEYS.users, [
        { id: "USR-001", username: "Rolandj", email: "rolandj@example.com", department: "Administration", status: "Active" },
        { id: "USR-002", username: "Maria Santos", email: "maria@example.com", department: "Medical Records", status: "Active" },
        { id: "USR-003", username: "Juan Dela Cruz", email: "juan@example.com", department: "Medical", status: "Active" },
        { id: "USR-004", username: "Angela Garcia", email: "angela@example.com", department: "Nursing", status: "Active" },
        { id: "USR-005", username: "Carlo Ramos", email: "carlo@example.com", department: "Pharmacy", status: "Active" }
    ]);

    let accessAssignments = readRecords(STORAGE_KEYS.access, []);
    let loginActivity = readRecords(STORAGE_KEYS.logins, []);

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

    function validateOnBlur(field, validator) {
        if (!field) return;
        field.addEventListener("blur", validator);
        field.addEventListener("input", function () {
            if (field.classList.contains("validation-invalid")) validator();
        });
        field.addEventListener("change", validator);
    }

    function resetValidation(form) {
        form.querySelectorAll(".validation-valid, .validation-invalid").forEach(function (field) {
            field.classList.remove("validation-valid", "validation-invalid");
        });
        form.querySelectorAll(".validation-message").forEach(function (message) {
            message.classList.remove("show");
            message.textContent = "";
        });
        const rightsGroup = form.querySelector(".checkbox-group");
        if (rightsGroup) rightsGroup.classList.remove("validation-invalid");
    }

    function getNextId(records, prefix) {
        let max = 0;
        records.forEach(function (record) {
            const match = String(record.id || "").match(/(\d+)$/);
            if (match) max = Math.max(max, Number(match[1]));
        });
        return prefix + String(max + 1).padStart(3, "0");
    }

    function emptyRow(tbody, colspan, text) {
        tbody.innerHTML = `<tr><td colspan="${colspan}" class="empty-records">${escapeHTML(text)}</td></tr>`;
    }

    function renderUsers() {
        const tbody = document.querySelector("#userRecordsTable tbody");
        if (!tbody) return;
        tbody.innerHTML = "";
        if (!users.length) {
            emptyRow(tbody, 6, "No authorized users have been stored yet.");
            return;
        }
        users.forEach(function (user) {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${escapeHTML(user.id)}</td>
                <td>${escapeHTML(user.username)}</td>
                <td>${escapeHTML(user.email)}</td>
                <td>${escapeHTML(user.department)}</td>
                <td><span class="status ${user.status === "Active" ? "active" : "pending"}">${escapeHTML(user.status)}</span></td>
                <td><button type="button" class="record-delete" data-type="user" data-id="${escapeHTML(user.id)}">Delete</button></td>`;
        });
    }

    function renderAccessAssignments() {
        const tbody = document.querySelector("#accessRecordsTable tbody");
        if (!tbody) return;
        tbody.innerHTML = "";
        if (!accessAssignments.length) {
            emptyRow(tbody, 5, "No access assignments have been stored yet.");
            return;
        }
        accessAssignments.forEach(function (record) {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${escapeHTML(record.id)}</td>
                <td>${escapeHTML(record.userId)}</td>
                <td>${escapeHTML(record.rights.join(", "))}</td>
                <td>${escapeHTML(record.expirationDate)}</td>
                <td><button type="button" class="record-delete" data-type="access" data-id="${escapeHTML(record.id)}">Delete</button></td>`;
        });
    }

    function renderLoginActivity() {
        const tbody = document.querySelector("#loginRecordsTable tbody");
        if (!tbody) return;
        tbody.innerHTML = "";
        if (!loginActivity.length) {
            emptyRow(tbody, 4, "No successful login submissions have been stored yet.");
            return;
        }
        loginActivity.forEach(function (record) {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${escapeHTML(record.id)}</td>
                <td>${escapeHTML(record.username)}</td>
                <td>${escapeHTML(record.dateTime)}</td>
                <td><button type="button" class="record-delete" data-type="login" data-id="${escapeHTML(record.id)}">Delete</button></td>`;
        });
    }

    function refreshUserDropdown() {
        const select = document.getElementById("accessUserId");
        if (!select) return;
        const current = select.value;
        select.innerHTML = '<option value="">Select User ID</option>';
        users.forEach(function (user) {
            const option = document.createElement("option");
            option.value = user.id + " — " + user.username;
            option.textContent = user.id + " — " + user.username;
            select.appendChild(option);
        });
        if (Array.from(select.options).some(function (option) { return option.value === current; })) {
            select.value = current;
        }
    }

    function renderAllRecords() {
        renderUsers();
        renderAccessAssignments();
        renderLoginActivity();
        refreshUserDropdown();
    }

    // FORM 1 - ADD USER
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
            const valid = validateUsername() && validateEmail() && validateDepartment() && validatePassword() && validateStatus();
            if (!valid) {
                alert("Please correct the highlighted fields before adding the user.");
                const firstInvalid = addUserForm.querySelector(".validation-invalid");
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const newUser = {
                id: getNextId(users, "USR-"),
                username: username.value.trim(),
                email: email.value.trim(),
                department: department.value,
                status: status.value
            };

            // Password is validated but intentionally not stored in the record table.
            users.push(newUser);
            saveRecords(STORAGE_KEYS.users, users);
            renderAllRecords();

            alert("User successfully added and stored as " + newUser.id + ".");
            addUserForm.reset();
            resetValidation(addUserForm);
        });
    }

    // FORM 2 - ROLE & ACCESS
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
            checkbox.addEventListener("change", validateRights);
        });

        accessAssignmentForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const validUser = validateUserId();
            const validDate = validateExpiration();
            const validRights = validateRights();

            if (!validRights) alert("Please select at least one access right (Read, Write, Execute, or Admin).");
            if (!validUser || !validDate || !validRights) {
                if (!validUser) userId.focus();
                else if (!validDate) expiration.focus();
                return;
            }

            const selectedRights = rights.filter(function (checkbox) { return checkbox.checked; }).map(function (checkbox) { return checkbox.value; });
            const newAssignment = {
                id: getNextId(accessAssignments, "ACC-"),
                userId: userId.value,
                rights: selectedRights,
                expirationDate: expiration.value
            };

            accessAssignments.push(newAssignment);
            saveRecords(STORAGE_KEYS.access, accessAssignments);
            renderAccessAssignments();

            alert("Access assignment successfully stored as " + newAssignment.id + ".");
            accessAssignmentForm.reset();
            resetValidation(accessAssignmentForm);
        });
    }

    // FORM 3 - SYSTEM LOGIN
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

            const newLogin = {
                id: getNextId(loginActivity, "LOG-"),
                username: loginUsername.value.trim(),
                dateTime: new Date().toLocaleString()
            };
            loginActivity.push(newLogin);
            saveRecords(STORAGE_KEYS.logins, loginActivity);
            renderLoginActivity();

            alert("Login submission successfully stored as " + newLogin.id + ".");
            if (!document.getElementById("rememberMe").checked) {
                systemLoginForm.reset();
                resetValidation(systemLoginForm);
            }
        });
    }

    // TASK 7 - RECORD MANAGEMENT: delete individual stored records.
    document.addEventListener("click", function (event) {
        const button = event.target.closest(".record-delete");
        if (!button) return;

        const type = button.getAttribute("data-type");
        const id = button.getAttribute("data-id");
        if (!confirm("Delete record " + id + "?")) return;

        if (type === "user") {
            users = users.filter(function (record) { return record.id !== id; });
            saveRecords(STORAGE_KEYS.users, users);
            renderAllRecords();
        } else if (type === "access") {
            accessAssignments = accessAssignments.filter(function (record) { return record.id !== id; });
            saveRecords(STORAGE_KEYS.access, accessAssignments);
            renderAccessAssignments();
        } else if (type === "login") {
            loginActivity = loginActivity.filter(function (record) { return record.id !== id; });
            saveRecords(STORAGE_KEYS.logins, loginActivity);
            renderLoginActivity();
        }
    });

    renderAllRecords();
});
