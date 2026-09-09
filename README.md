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
- Provides Edit and Delete controls for every stored record.
- Automatically updates the User ID dropdown when a new user is added or removed.
- Password values are validated but are not stored in the record table.

### Testing
- Tested invalid submissions: invalid records are not saved.
- Tested valid submissions: valid records are saved and displayed immediately.
- Tested browser refresh: Local Storage records remain available.
- Tested multiple records and record deletion.


## Task 8 – Record Editing and Deletion (CRUD Update & Delete)

Implemented Update and Delete features for all records stored in Local Storage.

### Task 8 Features
- Added an **Edit** button beside every stored user, access assignment, and login activity record.
- Opens an edit modal with the selected record's current information already populated.
- Applies the Task 6 validation rules when updating records.
- Updates the existing record in Local Storage instead of creating a duplicate.
- Refreshes the table immediately using JavaScript DOM manipulation without reloading the page.
- Added a **Delete** button beside every record.
- Shows a confirmation prompt before permanently deleting a record.
- Removes deleted records from both the table and Local Storage.
- Keeps the existing hospital system design and button styling.
- Does not store passwords in the edit form or record table.
- Updated the project documentation for Task 8.

### Task 8 Testing Checklist
1. Add a valid user and confirm it appears in the stored users table.
2. Click **Edit**, change the username/email/department/status, then click **Save Changes**.
3. Confirm the changed values appear immediately and remain after refreshing the browser.
4. Try invalid values while editing and confirm the update is blocked.
5. Edit an access assignment and confirm the updated rights/date are shown immediately.
6. Edit a login activity record and confirm the updated values are shown.
7. Click **Delete**, cancel the confirmation, and verify the record remains.
8. Click **Delete** again and confirm; verify the record disappears and remains deleted after refresh.
9. Commit and push the updated project to GitHub.
