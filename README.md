# Unit Testing Project

This project demonstrates unit testing using Vitest and vitest-mock-extended, with a focus on deep mocking a database. It also includes a CI/CD pipeline for automated testing on pull requests.

## Project Goals:

- Learn and implement unit testing
- Practice deep mocking of a database
- Set up a CI/CD pipeline for automated testing

## Technologies Used:

- Vitest
- vitest-mock-extended
- Prisma
- GitHub Actions (for CI/CD)

## Getting Started:

To set up and run this project locally, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/X9Z0/unit-testing.git
```

2. Navigate to the project directory:

```bash
   cd unit-testing
```

3. Install dependencies and generate Prisma client:

```bash
   npm install && npx prisma generate
```

4. Run the tests:

```bash
   npm run test
```

## CI/CD Pipeline:

This project includes a CI/CD pipeline configured with GitHub Actions. The pipeline automatically runs the test suite on every pull request, ensuring code quality and functionality before merging.

## Contributing:

Contributions are welcome! Please feel free to submit a pull request.
