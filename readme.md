
📦 Playwright Test Project for the `go-admin` User Module

This project is a standalone **Playwright-based automated test suite** that tests the **user management module** of the open-source `go-admin` admin system. The tests are written in TypeScript and use the Playwright Test framework.

---

🧱 Folder Structure

playwright-tests/
├── tests/                         # Test cases (spec files)
│   └── user-management.spec.ts
├── page-objects/                         # Page Object Model (POM) classes
│   ├── login.page.ts
│   └── user.page.ts
├── fixtures/                      # Shared setup (e.g., login)
│   └── base.fixture.ts
├── playwright.config.ts          # Playwright configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json
└── README.md                     # This file

---

🚀 Setup


1. Create a separate folder for the tests:

mkdir auto-test && cd auto-test

2. Initialize the Node.js project:

npm init -y

3. Install Playwright:

npm install -D @playwright/test
npx playwright install

4. (Optional) Generate a basic test:

npx playwright codegen http://localhost:PORT

⚠️ Replace `PORT` with the actual port your `go-admin` instance is running on (e.g., 8000).

or online:
🤌🏻http://demo.go-admin.com/admin/login

5. Create the file structure (see above) and write your first test.

---

🖥️ Installing the MCP Server (Playwright Test Reporter Dashboard)

The Playwright MCP (Multi-Channel Process) server allows you to track and report tests in real time through a web interface.

Installation:

npm install -D @reportportal/agent-js-playwright

Starting the MCP Server:

1. Create a `reportportal.config.json` file in the root folder (see agent documentation for a sample config).
2. Run the tests in MCP mode:

npx playwright test --project=mcp

More info: https://github.com/reportportal/agent-js-playwright

or 
🤌🏻Install from VSC marketplace

---

⚙️ Playwright Configuration (playwright.config.ts)

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'http://localhost:8000',
  },
});

🤌🏻Useful VS Code Plugins
- GitHub Copilot
- Indent Rainbow
- MCP Inspector
- MCP Server
- Playwright Runner
- Playwright Trace Viewer
- Prettier
- TODO Highlight
- vscode-icons

---

🧪 Running the Tests

npx playwright test

- Run a specific test:

npx playwright test tests/user-management.spec.ts

- Generate HTML report:

npx playwright show-report

---

🔑 Test Features (User Module)

The following features will be tested:

- 

---

🔧 Testing Methodology

- End-to-End browser automation using Playwright
- Page Object Model for easier maintenance
- Isolated tests: each test starts from a clean state
- Screenshots & video on failures

---

📎 Requirements

- Node.js (>= 18)
- `go-admin` running locally (http://localhost:8000 or online)

---

📬 Questions / Issues

If you have questions, open a new GitHub issue or check the Playwright documentation.

---

Made with ❤️ for testing `go-admin`. Fire up Playwright and happy testing! 🧪
