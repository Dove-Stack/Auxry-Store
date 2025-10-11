# Auxry Store 🛍️

> **Auxry Store** is a full-stack e-commerce application built with modern web technologies.  
> It aims to showcase a production-grade workflow: frontend UI, backend APIs, admin functionalities, and payment integrations.

---

## Table of Contents

- [Demo & Screenshots](#demo--screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Payment Integration](#payment-integration)
- [Admin Panel](#admin-panel)
- [Contributing](#contributing)
- [Roadmap & Future Enhancements](#roadmap--future-enhancements)
- [License](#license)
- [Contact](#contact)

---

## Demo & Screenshots

_(Add screenshots or link to live demo once deployed)_  
![Home Page](./screenshots/home.png)  
![Product Preview](./screenshots/product-preview.png)  
![Admin Dashboard](./screenshots/admin-dashboard.png)

Live demo URL: [https://auxry-store.example.com](#) _(replace with actual deployment link)_

---

## Features

- Product listing, pagination, filtering
- Product preview with details
- Cart management & checkout flow
- Payment integration with Stripe
- Order confirmation (via webhook)
- User authentication (signup/login) (planned)
- Admin dashboard for managing products & orders
- Responsive design for mobile & desktop
- Error handling & form validation
- Clean CSS styling and UX polish

---

## Tech Stack

| Part     | Tech / Tools                             |
| -------- | ---------------------------------------- |
| Frontend | React, React Router, Context API         |
| Backend  | Node.js, Express.js                      |
| Database | MongoDB (Atlas) / Mongoose               |
| Payment  | Stripe                                   |
| Styling  | Tailwind CSS or Custom CSS (your choice) |
| Tools    | Git, Postman, VSCode, Stripe CLI         |

---

## Architecture & Folder Structure

Here’s a high-level overview of how the project is organized:

```bash
auxry-store/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── assets/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── package.json
├── admin/ # (if a separate admin frontend)
│   └── ...
├── screenshots/
├── README.md
└── .gitignore
```

- **frontend/** contains the React application
- **backend/** hosts the Express API
- **admin/** (optional) for admin UI
- **screenshots/** for images used in README or documentation

---

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn
- MongoDB (Atlas or local)
- Stripe account (for API keys & webhook setup)

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/Dove-Stack/Auxry-Store.git

   ```

2. Navigate to the project directory:

   ```bash
   cd Auxry-Store
   ```

3. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

4. Install dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

5. If the admin panel is included, install its dependencies:
   ```bash
   cd ../admin
   npm install
   ```

### Running Locally

1. Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:

   ```bash
   cd ../frontend
   npm start
   ```

3. If the admin panel is included, start its development server:

   ```bash
   cd ../admin
   npm start
   ```

   #### \*If you have admin UI, run that too.

   ### Environment Variables

   Create a `.env` file in the root of the backend and frontend directories with the following variables:

   ```bash
   # Backend
   MONGODB_URI=your_mongodb_uri
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   JWT_SECRET=your_jwt_secret
   ```

   ```bash
   # Frontend
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

   Make sure to replace the placeholder values with your actual configuration.

   If your frontend or admin uses API keys, include those in their env too (but never commit secret keys).


    ### Api Endpoints
    | Method | Route                 | Description                       |
    | ------ | --------------------- | --------------------------------- |
    | GET    | `/api/products`       | Fetch list of products            |
    | GET    | `/api/products/:id`   | Get details of a single product   |
    | POST   | `/api/orders/create`  | Create a new order (checkout)     |
    | POST   | `/api/webhook`        | Stripe webhook for payment events |
    | POST   | `/api/users/login`    | Authenticate a user (future)      |
    | POST   | `/api/users/register` | Register a new user (future)      |
    | PUT    | `/api/products/:id`   | Update product details (admin)    |
    | DELETE | `/api/products/:id`   | Delete a product (admin)          |
    | GET    | `/api/orders`         | Fetch all orders (admin)          |
    | GET    | `/api/orders/:id`     | Get details of a specific order   |
    | PUT    | `/api/orders/:id`     | Update order status (admin)       |
    | DELETE | `/api/orders/:id`     | Cancel an order                   |


    ### Payment Integration
       - Stripe Checkout is used to handle the payment session

       - On the backend side, a webhook verifies the payment success and updates the order

       - After successful payment, order data is saved in the database

       - Make sure to test with Stripe CLI locally for your webhook events.


    ### Testing
       - Use Postman or similar tools to test API endpoints

       - Write unit tests for critical backend logic

       - Ensure frontend components are tested (Jest/React Testing Library)

    ## Contributing

    **Please open an issue or submit a pull request.**

    ### You’re welcome to contribute! Here’s how:

    - Fork the repo

    - Create a feature branch: git checkout -b feature/FeatureName

    - Make changes / additions

    - Commit your work: git commit -m "Add XYZ feature"

    - Push: git push origin feature/FeatureName

    - Open a Pull Request and explain what your PR does

    - Please make sure to follow code style, write clear commit messages, and test your changes.


   ## Roadmap and Future Enhancements

   - Implement user authentication and authorization
   - Add more payment options (e.g., PayPal, Paystack & Flutterwave)
   - Implement product filtering and advanced search
   - Add order history for users
   - Improve product search and filtering
   - Enhance admin panel with analytics and reporting
   - Optimize performance and scalability
   - Image hosting (Cloudinary / AWS S3)

   - Improve admin UI

   - Deploy both frontend & backend

   - Add CI/CD & automated tests


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Contact
   - Name: Lawal Oluwafemi David
   - Email: femilawal0123@gmail.com
   - GitHub: [@Dove-Stack](https://github.com/Dove-Stack)