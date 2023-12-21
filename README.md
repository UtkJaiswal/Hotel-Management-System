# Hotel Management App


## Features

### User Module

- **Login:** Allows users to log in.
- **Signup:** Enables user registration.
- **Rooms:** Enables users to view available rooms by selecting check-in and checkout dates.

### Admin Module

- **Login:** Allows admin to log in.
- **Rooms:** Displays all rooms available.
- **Update a Room:** Enables updating room details.
- **Booking Details:** Displays booking information, including check-in and checkout dates, price, and total revenue.

## Usage

### Routes

#### User Routes

- **Login:** [http://localhost:3000/login](http://localhost:3000/login)
- **Signup:** [http://localhost:3000/signup](http://localhost:3000/signup)
- **Rooms:** [http://localhost:3000/rooms](http://localhost:3000/rooms)

#### Admin Routes

- **Login:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **Rooms:** [http://localhost:3000/admin/rooms](http://localhost:3000/admin/rooms)
- **Update a Room:** [http://localhost:3000/admin/rooms/<room_id>](http://localhost:3000/admin/rooms/<room_id>)
- **Booking Details:** [http://localhost:3000/admin/bookingDetails](http://localhost:3000/admin/bookingDetails)

#### Admin Credentials:

- **Email:** admin@gmail.com
- **Password:** admin



# Hotel Management App

## Project setup

```bash
npm run dev
```

## User module

    1.  Login route: [http://localhost:3000/login](http://localhost:3000/login) allows users to login

    2.  Signup route: [http://localhost:3000/signup](http://localhost:3000/signup) allows users to register

    3.  Rooms route: [http://localhost:3000/rooms](http://localhost:3000/rooms) allows users to select check in and checkout date and accordingly shows the available rooms

## Admin module [http://localhost:3000/admin](http://localhost:3000/admin)

    1.  Login route: [http://localhost:3000/admin](http://localhost:3000/admin) allows admin to login

    2.  Rooms route: [http://localhost:3000/admin/rooms](http://localhost:3000/admin/rooms) shows all rooms

    3.  Update a room route: [http://localhost:3000/admin/rooms/<room_id>](http://localhost:3000/admin/rooms/<room_id>) allows to update a particular room.

    4.  Booking details route: [http://localhost:3000/admin/bookingDetails](http://localhost:3000/admin/bookingDetails) shows all booking details like check in and checkout date, price and the total revenue.

    Credentials for admin:

    email: admin@gmail.com
    password:admin