# Expense Tracker

#### Video Demo: https://youtu.be/mZwaODmpRLk

#### Description:
This Expense Tracker is a web-based application that allows users to manage their personal expenses effectively. Users can add expenses by specifying the amount, category, and date. The application provides a dynamic table that displays all entered expenses, including the date, description, and amount. Users also have the option to delete any expense record.

The main features of the Expense Tracker include:

- **Add Expenses:** Users can input the amount spent, select a category for the expense, and set the date when the expense occurred.

- **View Expenses:** The expenses are displayed in a structured table format with columns for date, description, amount, and an action button to delete the expense.

- **Filter by Category:** Users can filter the visible expenses based on categories to better track spending in specific areas.

- **Delete Expenses:** Each expense item comes with a delete button, allowing users to remove incorrect or old entries.

- **Dynamic Totals:** The application calculates and displays the total expenses dynamically. This total updates whenever an expense is added or deleted, providing real-time feedback on the user's spending.

- **Total Expenses by Category:** The application also displays the sum of expenses grouped by category, giving users insight into their spending patterns.

This project utilizes Python with Flask for the backend and HTML, CSS, and JavaScript for the frontend. Data persistence is achieved using an SQL database, where the expense records are stored and queried.

The application is designed to be intuitive and user-friendly, with a clean interface that makes tracking expenses a straightforward task.

To set up and run the project:

1. Ensure Python and Flask are installed on your system.
2. Navigate to the project directory and activate the virtual environment.
3. Run `python app.py` to start the Flask server.
4. Access the application through your browser at the address indicated by Flask (usually `localhost:5000` or `127.0.0.1:5000`).

Future enhancements can include user authentication to keep expenses private and the ability to edit existing expenses.

