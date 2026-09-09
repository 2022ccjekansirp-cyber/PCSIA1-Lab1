# Hospital Database Management System

## Project Title
Hospital Database Management System for St. Elizabeth Hospital, General Santos City

## Included Features
- Dashboard
- Patient Records
- Doctors & Medical Staff
- Appointments
- Laboratory
- Pharmacy
- Billing & Payments
- Reports
- User & System Administration

## User & System Administration Forms
1. Add User — Username, Email Address, Department, Initial Password, Status Dropdown
2. Role & Access Assignment — User ID Select, Read/Write/Execute/Admin Checkboxes, Expiration Date
3. System Login — Username/Email, Password, Remember Me

## Technologies
- HTML5
- CSS3
- JavaScript


## Task 7 – Data Storage and Record Management

Implemented client-side record storage and management using JavaScript and browser Local Storage.

### Task 7 Features
- Stores only records that pass Task 6 validation.
- Stores authorized users, access assignments, and successful login activity.
- Displays newly submitted records immediately using JavaScript DOM manipulation.
- Restores saved records after refreshing the browser.
- Keeps records organized in tables using the existing hospital system styling.
- Provides individual Delete controls for stored records.
- Automatically updates the User ID dropdown when a new user is added or removed.
- Password values are validated but are not stored in the record table.

### Testing
- Tested invalid submissions: invalid records are not saved.
- Tested valid submissions: valid records are saved and displayed immediately.
- Tested browser refresh: Local Storage records remain available.
- Tested multiple records and record deletion.
