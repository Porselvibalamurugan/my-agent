# 🤖 GitAgent — AI Assistantent with all files loaded — `SOUL.md`, `RULES.md`, and `skills/`.


> **Your Git repository becomes your AI agent.**  
> Built on the open [gitagent](https://github.com/open-gitagent/gitagent) standard · Powered by Google Gemini · Deployed with gitclaw

---

## 1. Project Description

**GitAgent** is a fully git-native AI agent built on the open `gitagent` standard. It demonstrates how a Git repository itself can become a living, intelligent agent — with identity, personality, rules, skills, and memory all defined as version-controlled plain text files.

Unlike traditional AI chatbot setups that scatter logic across code files and configuration, GitAgent treats **the repository as the agent**. Every characteristic of the agent — how it thinks, what it values, what it can do, and what it must never do — is defined in files that can be versioned, branched, diffed, forked, and reviewed just like any other code.

The project has three layers:

| Layer | What it does |
|---|---|
| **Agent Definition** | `agent.yaml`, `SOUL.md`, `RULES.md`, `skills/` define who the agent is |
| **Runtime** | `gitclaw` SDK reads these files and brings the agent to life via Gemini AI |
| **Interface** | A Node.js server + polished dark-theme web UI for browser-based chat |

The result is an AI agent that is **portable, auditable, collaborative, and fully reproducible** — anyone can clone this repo and have the agent running in minutes.

---

## 2. Features, Tools & Frameworks

### Core Features

- **Git-native agent definition** — the repo IS the agent, no separate config system
- **Personality system** via `SOUL.md` — defines tone, values, and communication style
- **Hard constraint enforcement** via `RULES.md` — must-always and must-never behaviors
- **Composable skill system** — modular capabilities via `skills/my-skill/SKILL.md`
- **Retry-resilient Gemini integration** — automatic retry on 503/rate-limit errors (3 attempts)
- **Interactive web chat UI** — real-time conversation with animated typing indicator
- **Quick-start suggestion chips** — pre-built prompts for instant engagement
- **Gradient scrollbar** — smooth UX for long conversations
- **Keyboard support** — press Enter to send messages
- **Secure secrets** — API keys in `.env`, never hardcoded or committed

### Tools & Packages Used

| Tool | Version | Purpose |
|---|---|---|
| `@open-gitagent/gitagent` | v0.2.0 | Agent definition standard + CLI validation |
| `gitclaw` | v1.3.2 | Universal git-native agent runtime SDK |
| `clawless-sdk` | v1.1.0 | Serverless browser WebContainer runtime |
| `dotenv` | latest | Secure environment variable management |
| Google Gemini API | `gemini-2.5-flash` | AI model powering responses |
| Node.js | v21.6.2 | JavaScript runtime for backend server |

### Frameworks & Standards

- **gitagent Specification v0.1.0** — Open standard for git-native agent definitions
- **SKILL.md format** — YAML frontmatter + markdown instructions for composable skills
- **Google Generative AI REST API** — Direct fetch-based integration
- **Node.js `http` module** — Lightweight server, zero framework dependencies
- **CSS Custom Properties** — Full dark theme with purple-teal gradient system
- **Google Fonts** — Syne (display) + DM Sans (body) for premium typography

### File Architecture

```
my-agent/
├── agent.yaml              # Agent manifest — name, model, skills, runtime config
├── SOUL.md                 # Agent personality, communication style, core values
├── RULES.md                # Hard behavioral constraints — must always / must never
├── skills/
│   └── my-skill/
│       └── SKILL.md        # Composable skill with YAML frontmatter + instructions
├── server.js               # Node.js HTTP server — serves UI and proxies Gemini API
├── index.html              # Browser chat interface with animations and dark theme
├── run.js                  # CLI agent runner using gitclaw SDK
├── .env                    # Secret API key storage — gitignored for security
├── .gitignore              # Excludes .env and node_modules from version control
└── package.json            # Node.js dependencies and project metadata
```

---

## 3. Local Setup & Run Instructions

### Prerequisites

Before you start, make sure you have:

- **Node.js v18+** — [nodejs.org](https://nodejs.org)
- **Git** — [git-scm.com](https://git-scm.com)
- **A free Gemini API key** — [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
- **VS Code** (recommended) — [code.visualstudio.com](https://code.visualstudio.com)

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/your-username/my-agent.git
cd my-agent
```

---

### Step 2 — Install Dependencies

```bash
npm install
```

---

### Step 3 — Set Up Your API Key

Create a file called `.env` in the project root and add your Gemini API key:

```env
GEMINI_API_KEY=AIzaSyYourActualKeyHere
```

> Get your free API key at https://aistudio.google.com/apikey  
> Never commit this file — it is already listed in `.gitignore`

---

### Step 4 — Validate the Agent

```bash
npx @open-gitagent/gitagent validate
```

You should see:

```
✓ agent.yaml — valid
✓ SOUL.md — valid
✓ skills/ — valid
────────────────────────────────────────
✓ Validation passed (0 warnings)
```

---

### Step 5 — Run the Web Interface

```bash
node server.js
```

Then open your browser at:

```
http://localhost:3000
```

Type any question and press **Send** or **Enter**.

---

### Step 6 — (Optional) Run via CLI

```bash
node run.js
```

---

### Troubleshooting

| Problem | Solution |
|---|---|
| `429 Quota Error` | Daily free limit hit — wait 24 hours or create a new API key |
| `SKILL.md frontmatter error` | Use Python to write the file — CMD echo adds bad line endings |
| `GOOGLE_API_KEY conflict` | Run `set GOOGLE_API_KEY=` before `node server.js` on Windows |
| `Port 3000 in use` | Change `server.listen(3000)` to `server.listen(3001)` in `server.js` |
| `Cannot find package` | Run `npm install` again |

---

## How It Works

```
You type a question in the browser
        ↓
index.html sends POST /ask to server.js
        ↓
server.js calls Google Gemini API with your question
        ↓
Gemini processes it and returns an answer
        ↓
server.js sends the answer back to the browser
        ↓
index.html displays it in the chat bubble
```

---

## Built With

- [gitagent](https://github.com/open-gitagent/gitagent) — Git-native agent standard
- [gitclaw](https://www.npmjs.com/package/gitclaw) — Universal agent runtime
- [Google Gemini](https://ai.google.dev/) — AI model
- [clawless-sdk](https://www.npmjs.com/package/clawless-sdk) — Serverless WebContainer runtime

---

## License

MIT — feel free to fork, remix, and build your own git-native agents!

---

*Built for the gitagent Hackathon · gitagent Standard v0.1.0*

