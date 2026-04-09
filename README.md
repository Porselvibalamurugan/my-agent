# 🤖 GitAgent — Git-Native AI Agent

> A framework-agnostic AI agent that lives inside a Git repository, powered by Google Gemini and built with the gitagent standard.

---

## Project Description

**GitAgent** is an AI-powered conversational agent where your **Git repository is your agent**. Instead of writing complex AI logic from scratch, the agent's identity, personality, rules, and capabilities are all defined using simple Markdown and YAML files inside a Git repo.

The project uses the **gitagent standard** to define the agent, **gitclaw SDK** to bring it to life in the terminal, and a custom **Node.js web server** to serve it as a browser-based chat interface — all powered by **Google Gemini AI**.

This means you can version-control your agent like code, fork it, branch it, diff it, and share it — making AI agents as portable and collaborative as software.

---

## ✨ Features

- 🧠 **Git-native agent definition** — identity, rules, and skills live in version-controlled files
- 💬 **Browser chat interface** — beautiful dark-themed UI with real-time responses
- ⚡ **Gemini AI backend** — powered by Google's Gemini 2.5 Flash model
- 🔄 **Auto-retry logic** — automatically retries failed API calls up to 3 times
- 🎨 **Animated UI** — typing indicators, glowing scrollbar, gradient accents
- 🔒 **Secure key management** — API keys stored in `.env`, never in Git
- 📦 **Skill system** — composable capability modules via `skills/` folder
- 🛠️ **CLI runner** — run the agent directly in terminal with `run.js`
- ✅ **Validation** — `gitagent validate` checks your agent definition before running
- 🚀 **Serverless-ready** — deployable via clawless-sdk for browser-based execution

---

## 🗂️ Project Structure

```
my-agent/
├── agent.yaml              # Agent manifest — name, model, skills, config
├── SOUL.md                 # Agent personality, values, communication style
├── RULES.md                # Hard constraints — must always / must never
├── skills/
│   └── my-skill/
│       └── SKILL.md        # Skill definition with YAML frontmatter
├── .env                    # Secret API keys (never committed to Git)
├── .gitignore              # Excludes .env and node_modules
├── index.html              # Browser chat UI
├── server.js               # Node.js backend server
├── run.js                  # CLI agent runner using gitclaw SDK
├── package.json            # npm dependencies
└── README.md               # Project documentation
```

---

##  Tools, Frameworks & Technologies

| Tool | Purpose |
|---|---|
| **gitagent** (`@open-gitagent/gitagent`) | Standard for defining git-native AI agents |
| **gitclaw** | Runtime SDK that reads the agent repo and runs the agent |
| **clawless-sdk** | Serverless browser runtime powered by WebContainers |
| **Google Gemini API** | AI model that powers the agent responses |
| **Node.js** | JavaScript runtime for the backend server |
| **dotenv** | Loads environment variables from `.env` file |
| **HTML / CSS / JS** | Frontend browser chat interface |
| **Git** | Version control for the entire agent definition |

---

## 📋 Prerequisites

Before running this project, make sure you have:

-  **Node.js v18 or higher** — [Download here](https://nodejs.org)
-  **Git** — [Download here](https://git-scm.com)
-  **Google Gemini API Key** — [Get one here](https://aistudio.google.com/apikey)
-  **npm** — comes with Node.js

Check your versions:

```bash
node --version   # should be v18+
npm --version
git --version
```

---

##  How to Run Locally

### Step 1 — Clone the Repository

```bash
git clone <your-repo-url>
cd my-agent
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Set Up Your API Key

Create a `.env` file in the root of the project:

```
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

>  Never share or commit your API key. The `.env` file is already in `.gitignore`.

Get your free Gemini API key at 👉 [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

### Step 4 — Validate the Agent

```bash
npx @open-gitagent/gitagent validate
```

You should see:
```
✓ agent.yaml — valid
✓ SOUL.md — valid
✓ skills/ — valid
✓ Validation passed (0 warnings)
```

### Step 5 — Run in the Browser

```bash
node server.js
```

Then open your browser at:

```
http://localhost:3000
```

Type any question and click **Send** or press **Enter**!

---

## How to Run in the Terminal (CLI Mode)

If you want to test the agent directly in the command line without a browser:

```bash
node run.js
```

This uses the **gitclaw SDK** to run the full agent with all files loaded — `SOUL.md`, `RULES.md`, and `skills/`.

---

## 🔧 How It Works

```
Browser (index.html)
      ↓  user types question
server.js (Node.js)
      ↓  calls Google Gemini API
Gemini 2.5 Flash Model
      ↓  returns AI response
server.js
      ↓  sends answer back
Browser (shows answer in chat)
```

1. User types a question in the browser chat
2. `index.html` sends the question to `server.js` via POST `/ask`
3. `server.js` calls the Gemini API with the question
4. Gemini generates a response and returns it
5. `server.js` sends the response back as JSON
6. The browser displays it in the chat interface

---

## 🤖 Agent Definition Files

### `agent.yaml`
The agent's identity card — defines name, version, AI model, and skills.

### `SOUL.md`
The agent's personality — how it communicates, what it values, its expertise.

### `RULES.md`
Hard boundaries — what the agent must always do and must never do.

### `skills/my-skill/SKILL.md`
A specific capability — instructions for how the agent handles certain tasks.

---

##  Optional: Deploy Serverlessly with clawless

To run your agent in the browser with zero infrastructure:

```bash
npm install clawless-sdk
```

Then open the clawless UI directly from the installed package:

```
node_modules/clawless-sdk/dist/index.html
```

> ⚠️ clawless only supports Node.js-compatible skills. No Python or system binaries.

---

##  Security Notes

- API keys are stored in `.env` and loaded with `dotenv`
- `.env` is listed in `.gitignore` — never committed to Git
- The Gemini API key is only used server-side — never exposed to the browser

---

##  License

MIT — free to use, fork, and build upon.

---

## 🙌 Built With

- [gitagent standard](https://github.com/open-gitagent/gitagent)
- [gitclaw SDK](https://www.npmjs.com/package/gitclaw)
- [Google Gemini API](https://ai.google.dev)
- [clawless-sdk](https://www.npmjs.com/package/clawless-sdk)
