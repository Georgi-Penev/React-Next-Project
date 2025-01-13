This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For the database I used JSON server by running this command in a new terminal: 
json-server --watch --port 4000 ./_data/db.json

The app is a basic ticket tracking system using React and Next.

The main page is the dashboard where there can be an intro to the app, updates from the company and a buttons for the submited tickets and to create a ticket.

At the top we have the navbar, with the logo, name of the app and buttons for the dashboard, tickets and to create a ticket. This navbar persists in all pages.

In the tickets page we see the opened tickets. Clicking on any of them will open a page with more info about the ticket. The set priorities are color coded.

In the create a ticket page you will see a form to fill out the title, description and priority of the ticket. The button at the bottom is coded to be unavailable while the ticket`s data is being processed so that there is no spam clicking.

We have a custom loading page too, as well as custom 404 pages.

Things to do:
Functionality to delete and edit tickets.