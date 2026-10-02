# Granite Ascent

A small mobile climbing game that runs in the phone browser — one HTML file, no build step,
no dependencies.

You're a box-figure climber on a granite pillar somewhere above the Yosemite Valley floor.
Drag your thumb to steer him up the wall, keep your hands on holds, and don't get caught out
on the blank slabs.

## Play it

Open `index.html` — that's the whole game.

- **On a phone:** put the file on the device (or serve the folder and browse to it) and open it
  in Safari/Chrome. "Add to Home Screen" gives you a fullscreen, chrome-free version.
- **Serving locally:** `npx http-server .` then open the printed URL on your phone
  (same Wi-Fi as your computer).
- **On desktop:** it also works with the arrow keys / WASD, and `space` to restart.

## How it plays

- **Thumb joystick.** Touch *anywhere* on the screen and a floating stick appears under your
  thumb — no fixed corner to hunt for. Drag to steer; the climber follows.
- **Grip meter.** The bar at the top is your forearms. It refills whenever a hold is in reach,
  drains slowly when you're on bare featured rock, and drains *fast* out on a blank slab.
  Hit zero and you take the whipper.
- **Blank slabs** are the polished, dashed-outline patches. They have no holds by construction,
  so they're the thing to route around — or sprint across if the line demands it.
- **Chalk bags** scattered on the wall instantly refill your grip.
- **Rockfall** starts coming down past 300 ft. Getting hit costs grip and knocks you loose.
- **Score** is the highest point you reach, in feet. Your best is kept in `localStorage`.

Holds come in five flavours — jugs, flakes, crimps, pockets and slopers — and the mix gets
meaner the higher you go, while the blank slabs get wider and more frequent.

## Details worth zooming in on

The climber is a little box figure with a vented helmet, a chalked-up chest stripe, a harness
with a belay loop and racked quickdraws, a canvas **chalk bag** swinging off his hip, and
downturned **climbing shoes** with black rubber rands. His arms and legs solve two-bone IK onto
whatever holds are actually within reach, so he genuinely reaches for the rock he's on, and a
lead rope trails away below him.

The wall is procedurally generated granite: a speckled quartz/feldspar/biotite tile, world-locked
mottling so the tiling never reads as a grid, cracks, water streaks, and a sun raking it from the
left. Behind it is Yosemite at golden hour — Half Dome's sheared face, the Sierra crest, valley
haze, pines on the valley floor, and birds circling far below once you're high enough.

## Layout

Everything is in `index.html`, in labelled sections: world generation, input, state, update,
then the renderers (background → wall → holds → climber → UI).

## Also in this repo

- [`finance/`](finance/) — **Ledger**, a monthly finance organizer (bills and due dates, accounts,
  paid vs. owed, money in vs. money out) that installs to your Home Screen.
