> [<img src="https://img.shields.io/badge/Telegram-%40Me-orange">](https://t.me/roddyfred)

![img1](./.github/image/hero.png)

# Use Node.Js 18 or later

## Functionality

| Functional                            | Supported |
| ------------------------------------- | :-------: |
| Auto play roulette                    |    ✅     |
| Auto play hold to earn                |    ✅     |
| Claiming task                         |    ✅     |
| Claiming daily rewards                |    ✅     |
| Multithreading                        |    ✅     |
| Using a session/query_id              |    ✅     |
| Binding a proxy to a session/query_id |    ✅     |
| Random sleep time between clicks      |    ✅     |

### [How to add query id](https://github.com/Freddywhest/RockyRabbitBot/blob/main/AddQueryId.md)

## [Settings](https://github.com/FreddyWhest/MajorBot/blob/main/.env-example)

| Settings                   | Description                                                               |
| -------------------------- | ------------------------------------------------------------------------- |
| **API_ID / API_HASH**      | Platform data from which to launch a Telegram session (stock - Android)   |
| **AUTO_PLAY_ROULETTE**     | Whether the bot should play roulette (True / False)                       |
| **AUTO_PLAY_HOLD_TO_EARN** | Whether the bot should play hold to earn (True / False)                   |
| **AUTO_CLAIM_TASKS**       | Whether the bot claim tasks (True / False)                                |
| **CLAIM_DAILY_REWARDS**    | Whether the bot claim daily rewards (True / False)                        |
| **SLEEP_BETWEEN_REQUESTS** | Delay between taps in seconds (eg. 70)                                    |
| **USE_PROXY_FROM_FILE**    | Whether to use proxy from the `bot/config/proxies.js` file (True / False) |
| **USE_QUERY_ID**           | Whether to query_id instead of sessions (True / False)                    |

## Installation

You can download [**Repository**](https://github.com/FreddyWhest/MajorBot) by cloning it to your system and installing the necessary dependencies:

```shell
~ >>> git clone https://github.com/FreddyWhest/MajorBot.git
~ >>> cd MajorBot

#Linux and MocOS
~/MajorBot >>> chmod +x check_node.sh
~/MajorBot >>> ./check_node.sh

OR

~/MajorBot >>> npm install
~/MajorBot >>> cp .env-example .env
~/MajorBot >>> nano .env # Here you must specify your API_ID and API_HASH , the rest is taken by default
~/MajorBot >>> node index.js

#Windows
1. Double click on INSTALL.bat in MajorBot directory to install the dependencies
2. Double click on START.bat in MajorBot directory to start the bot

OR

~/MajorBot >>> npm install
~/MajorBot >>> cp .env-example .env
~/MajorBot >>> # Specify your API_ID and API_HASH, the rest is taken by default
~/MajorBot >>> node index.js
```

Also for quick launch you can use arguments, for example:

```shell
~/MajorBot >>> node index.js --action=1

OR

~/MajorBot >>> node index.js --action=2

#1 - Create session
#2 - Run clicker
```
