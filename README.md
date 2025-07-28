# 🤖 knime-pro-bot

A Discord bot that assigns access to the private channel based on the invite used to join server.

---

## ✨ Features

- Tracks which invite a new member used
- Automatically assigns a role if the correct invite was used
- Sends a welcome message with a link to the private channel

---

## 🛠 Requirements

- **Node.js v18+**
- Discord bot with these intents enabled in the [Discord Developer Portal](https://discord.com/developers/applications):
  - `SERVER MEMBERS INTENT`
- Bot permissions in your Discord server:
  - View Channels
  - Manage Roles
  - Read Message History
  - Send Messages

---

## ⚙️ Environment Variables

Set the following environment variables in your deployment platform (like Railway or Render):

| Variable         | Description                                     |
|------------------|-------------------------------------------------|
| `BOT_TOKEN`      | Your Discord bot token                          |
| `GUILD_ID`       | Your Discord server (guild) ID                  |
| `INVITE_CODE`    | The invite code you want to track               |

---

## 🚀 Usage

Install dependencies:

```bash
npm install

Run the bot:

```bash
npm start
```

Or with PM2:

```bash
pm2 start index.js --name knime-pro-bot
```

---

## 📁 Project Structure

```
.
├── index.js         # Bot logic
├── package.json     # Project metadata and scripts
└── README.md        # You're here
```


## 📌 Notes

* Invite code matching is case-insensitive
* The role `knime-pro` must already exist in your server
* Works well on free tiers of services like [Railway](https://railway.app) or [Render](https://render.com)

---

## 📜 License

ISC License

```
