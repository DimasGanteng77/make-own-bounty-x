# make-own-bounty-x

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/DimasGanteng77/make-own-bounty-x/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/DimasGanteng77/make-own-bounty-x/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post on X that quotes make.fun's make-your-own-bounty post, with a photo of its own attached. The picture is `promo.png` — a robot pinning a blank bounty poster on the board, gold coins and a trophy beside it — drawn by the agent for this post. Places go by the post's score at the deadline: replies + reposts + quotes, the highest first, top 50 sharing $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter (https://make.fun/sponsor/new).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to `/output/POST.json` and checks it names a real X post. `POST.json` holds the entry post's address once the post is live.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wst8dm8f&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
