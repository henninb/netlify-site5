# netlify-site5

A Next.js application with multiple interactive tools and a dashboard. Deployed to `site5.bhenning.com`.

## Tech Stack

- Next.js
- Netlify Functions
- Cypress (end-to-end testing)

## Tools

| Path | Tool |
|------|------|
| `/tool1` | Temperature converter |
| `/tool2` | Cat facts |
| `/tool3` | Hockey scores |
| `/tool4` | Board/scoreboard |
| `/tool5` | Login demo |
| `/tool6` | Spotify integration |
| `/tool7` | Wi-Fi PSK generator |
| `/tool8` | Blog |
| `/tool9` | Session cookie demo |

## Setup

```bash
npm install
```

## Running

```bash
./run.sh
```

## Testing

```bash
npx cypress open
```

## Deployment

Deploys to Netlify via `netlify.toml`. Site name: `bh-site5`.
