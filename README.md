# Crypto-Trading Project

This project consists of two main components: Backend and Frontend. Together, they form a complete system of Crypto-Trading.

## Backend

The backend is responsible for handling all the core functionalities of the trading system, including:
- Connecting to cryptocurrency exchanges
- Executing trades
- Managing user accounts and portfolios
- Providing APIs for the frontend

### Technologies Used
- Spring Boot
- MySQL
- Stripe Java
- Razorpay Java

## Frontend

This frontend provides a user-friendly interface for interacting with the trading system. It includes features such as:
- Real-time market data visualization
- Trade execution interface
- Portfolio management
- User authentication and authorization

### Technologies Used
- React
- Redux
- Tailwind CSS
- Axios

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/ManishPatidar806/Crypto-Trading.git
    cd crypto_trading
    ```

2. Set up the backend:
    ```bash
    cd Backend
    ./mvnw spring-boot:run
    ```

3. Set up the frontend:
    ```bash
    cd ../FrontEnd
    npm install
    npm run dev
    ```

## Usage

Once both the backend and frontend are running, you can access the trading platform by navigating to `http://localhost:5173` in your web browser.

## Contributing

We welcome contributions to the project. To contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
