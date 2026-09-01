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