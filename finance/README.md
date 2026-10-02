# Ledger — monthly finance organizer

A phone-first web app for keeping track of your money month by month: what's due and when,
what's been paid, what's still owed, and how much came in compared with how much went out.
It installs to your Home Screen, works offline, and keeps your data on your device. It has no
build step and no dependencies.

## What it tracks

- **Accounts.** Checking, savings, cash, investments, credit cards and loans. Credit cards take a
  balance, a credit limit, an APR and a **payment due day**. That payment then shows up with your
  bills every month.
- **Expected charges.** Rent, electricity, phone, insurance, subscriptions, and card or loan
  payments. Each one has a usual amount, a due day, how often it repeats, and the account it's paid
  from. You can change the amount for a single month (a bigger electric bill, this month's card
  statement) or skip a month.
- **Payments.** Record full or partial payments against any charge. Each charge shows *Paid*,
  *Due in N days*, *N days late* or *$X left*. Anything unpaid from earlier months stays visible
  until it's settled. Charges marked **Autopay** are recorded as paid on their due date.
- **Money in / money out.** Log paychecks, purchases and transfers. Account balances update as you
  go.
- **Month to month.** Compare money in with money out across 3, 6 or 12 months, with a chart and a
  table showing each month's net and what was left owed.

### How "accrued" and "deducted" are counted

- **Accrued (money in)** is all income logged in the month.
- **Deducted (money out)** is cash that actually left your checking, savings or cash accounts.
  That includes bill payments and payments toward cards and loans.
- A purchase **charged to a credit card** isn't counted as deducted when you make it. It's shown
  as "on cards" and counts once you pay the card. That way a purchase and the card payment that
  covers it aren't counted twice.

## Put it on your Home Screen

The app has to be served over HTTPS. GitHub Pages works and is free for this public repo:

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`,
   then click **Save**.
3. After a minute the app is live at
   `https://tommyauld02.github.io/Tommy-s-app-creation-pilot/finance/`.
4. **iPhone:** open that link in Safari, tap **Share**, then **Add to Home Screen**.
   **Android:** open it in Chrome and tap **Install app** (or menu → **Add to Home screen**).

On iPhone, the Home Screen app keeps its own storage, separate from Safari. Add it to your Home
Screen first and enter your numbers there. To move data across, use **Settings → Save backup**
in one place and **Restore backup** in the other.

## Your data

Everything is stored in the browser on your device (`localStorage`, key `ledger.v1`). Nothing is
sent anywhere. **Settings → Save backup** exports a JSON file that you can save to Files, iCloud
Drive or email. **Restore backup** loads it back, for example on a new phone. Settings also shows
when you last made a backup.

To try the app without entering anything, tap **Load sample data** on the welcome screen. **Start
fresh** clears it.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: styles, views, chart, forms and storage, in labelled sections |
| `manifest.webmanifest` | Home Screen name, icons and standalone display |
| `sw.js` | Service worker that caches the app for offline use. Bump `CACHE` when you ship changes |
| `icon.svg`, `*.png` | App icons (the PNGs are rendered from `icon.svg`) |

To run it locally, run `npx http-server .` from the repo root and open `/finance/`.
