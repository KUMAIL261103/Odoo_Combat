# Sports Infrastructure Management System

## Team Members

- Prem Patel
- Kumail Ghadiali
- Khushi Bansal
- Khushi Shukla

## Features

### User Management and Access Control
- Secure registration and login for administrators, facility managers, and users.
- Role-based access control with different permissions for admins, managers, and users.

### Facility Management
- List all available sports facilities with details like location, amenities, and availability.
- Booking system allowing users to book facilities based on availability and requirements.
- Reservation approval process for admins or managers.

### Scheduling and Calendar
- Event calendar displaying scheduled events, bookings, maintenance tasks, etc.
- Availability check allowing users to check facility availability for specific dates and times.

### Maintenance Management
- Schedule regular maintenance tasks for sports facilities.
- Maintain logs of maintenance activities, repairs, and inspections.

### Integrated Payment System
- Online payments through Stripe for facility bookings.
- Payment tracking to monitor payment statuses and history for each booking.

### Data Display with Filter, Sort, and Pagination
- Filter facilities based on different criteria.
- Sort facilities by name, location, amount, etc.
- Pagination to handle large lists of facilities efficiently.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Frontend:** React.js (or your preferred frontend framework)
- **Payment Gateway:** Stripe
- **Authentication:** JWT, Passport.js
- **Other:** Mongoose for MongoDB interactions

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Stripe account for payment processing
