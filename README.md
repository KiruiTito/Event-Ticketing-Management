Crowd-Tix-App

## Overview
This is a web application that aims to provide a user-friendly platform for event organizers to create and manage events, and for attendees to discover and book tickets for those events.

## Technologies Used
- Backend: Ruby on Rails
- Frontend: ReactJS with Redux Toolkit for state management

## Installation and Setup

### Backend Setup
1. Make sure you have Ruby 3.0.6 installed (using RVM or rbenv).
2. Install Rails 7.0.6 by running `gem install rails -v '7.0.6'`.
3. Clone the repository and navigate to the backend directory:
git clone <backend-repo-url>
cd crowd-tix-app-backend

4. Install dependencies using Bundler: `bundle install`.
5. Set up the database and run migrations: `rails db:create` and `rails db:migrate`.
6. Start the Rails server: `rails server`.

### Frontend Setup
1. Ensure Node.js is installed (v14.x or later recommended).
2. Clone the repository and navigate to the frontend directory:
3. Install dependencies using npm: `npm install`.
4. Start the development server: `npm start`.

## MVP Features
1. User Authentication:
- Users can register and log in with roles (customer and organizer).

2. Event Creation:
- Organizers can create events with details like name, date, location, description, and pricing tiers (Early booking, MVP, Regular).
- **Event Model:** The Event model stores information about events, including the event name, date, location, description, and pricing tiers.

3. Ticket Creation:
- Organizers can create different types of tickets with prices and availability for an event.
- **Ticket Model:** The Ticket model stores information about tickets, including the ticket type, price, and buyer details.

4. Event Listing and Searching:
- Users can search for events based on location, tags, or categories.

5. Ticket Purchasing:
- Customers can purchase tickets for events using MPESA STK.

6. View Purchased Tickets:
- Customers can view the list of tickets they've purchased.

7. Calendar Integration:
- Customers can add events to their calendar (Google Calendar, iCal, etc.).

## Future Enhancements
- Implement role-based access control to restrict certain actions based on user roles.
- Allow organizers to view ticket sales and attendee details for their events.
- Implement a notification system for event updates and ticket purchases.
- Add support for multiple payment gateways.

## Testing
- Unit tests and integration tests for both frontend and backend using Jest and Minitests.

## Authors
- Celine
- Tito
- Leon
- Charity

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
