---
sidebar_position: 5
title: "Pushbutton & Keypad Sequence Brute-Forcing"
sidebar_label: Pushbutton Brute-Forcing
tags: [techniques, pushbutton, kaba-simplex, keypads, brute-force, debruijn]
---

# Pushbutton & Keypad Sequence Brute-Forcing

Mechanical and electronic pushbutton locks (such as the ubiquitous Kaba Simplex 1000 and 5000 series, commercial gate keypads, and radio frequency DIP switch transmitters) are frequently secured by finite mathematical combination sets that can be systematically exhausted in the field.

---

## Kaba Simplex Mechanical Chamber Mechanics

The Kaba Simplex lock operates entirely mechanically without batteries or electricity. Its internal chamber consists of five stacked gear gears and pawls:

```text
       [ Buttons 1 - 5 ]
               |
               v
       [ Chamber Gears ]
               |
               v
       [ Locking Slide ] <--- Must drop into gear slots
               |
               v
       [ Drive Clutch ] ----> Retracts Deadlatch
```

### Unique Mechanical Characteristics
1. **Order Independence:** Within an individual push step, order does not matter. However, sequential steps do matter.
2. **Simultaneous Button Depressions (Chords):** Two or more buttons can be pressed at the exact same instant (e.g., `(1+4) then 3`).
3. **No Repeated Digits:** A button cannot be pressed more than once in a single combination because the button remains depressed until the handle is turned or cleared.
4. **Total Valid Combinations:** Across all single-button, sequential, and simultaneous combinations, a 5-button Simplex lock yields exactly **1,082 unique combinations** (or 2,164 if empty combinations are considered).

---

## Optimized Brute-Force Methodology

An unprepared attacker testing combinations at random wastes substantial time clearing and resetting the lock. Optimized search sequences compress the search space using mathematical principles:

### Step 1: Pre-Testing Common Factory & Facility Defaults
Before launching a systematic brute-force sequence, test high-probability factory and lazy contractor combinations:
- `2 and 4 together, then 3` (Factory default for many Simplex units)
- `3 then 2 and 4 together`
- `1 then 2 then 3 then 4 then 5`
- Single button combinations: `1`, `2`, `3`, `4`, `5`
- Common 3-digit chords: `(1+2) then 3`, `(2+3) then 4`

### Step 2: Systematic Progression
When testing a 5-button Simplex systematically:
1. Turn exterior knob/lever counter-clockwise to clear the chamber.
2. Enter the candidate combination.
3. Turn clockwise to test latch retraction.
4. If it fails, rotate counter-clockwise to reset and proceed to the next sequence item.

A disciplined operator can test 15 to 20 combinations per minute, exhausting the most likely 300 combinations in roughly 15 to 20 minutes, and the entire 1,082 combination space in under 60 minutes.

---

## De Bruijn Sequences on Digital Keypads

On digital keypads (such as standalone garage keypads or commercial 10-button access controllers) that evaluate input using a **sliding window register** without an explicit "Enter" key:

- A traditional brute-force of all 4-digit PINs (`0000` to `9999`) requires entering `10,000 x 4 = 40,000` individual keystrokes.
- A **De Bruijn sequence** overlaps adjacent combinations such that every single additional keystroke tests a brand-new 4-digit candidate:
  `Length = 10^4 + (4 - 1) = 10,003 keystrokes`
- This reduces the keystroke workload by nearly **75%**.

---

## 10-Position RF DIP Switch Brute-Forcing

Many commercial overhead garage doors, vehicle access gates, and older security alarms use 300 MHz / 315 MHz / 433 MHz radio transmitters with a 10-position binary or trinary DIP switch:

| Position Format | State Options | Total Combination Space | Time to Transmit at 100ms / Code |
| :--- | :--- | :--- | :--- |
| **10-Position Binary** | On / Off (2 states) | `2^10 = 1,024` combinations | **~1.7 minutes** |
| **10-Position Trinary** | +, 0, - (3 states) | `3^10 = 59,049` combinations | **~98 minutes** |

Using software-defined radios (SDRs) or physical radio brute-forcers (such as the open-source OpenSesame tool), transmitting every valid binary combination for a 10-position DIP switch opens the gate in under two minutes.

---

## Authoritative Standards & Literature

- [dormakaba Simplex 5000 Series Technical Documentation](https://kb.dormakaba.com/hc/en-us/articles/37641902407707-Simplex-5000-Series-Templates-Specifications-and-Instructions)  
  Factory blueprints covering the mechanical chamber assembly, combination reset procedures, and drive gear clearances.
- [Samy Kamkar: "OpenSesame" (Fixed Code Wireless Brute Forcing)](https://samy.pl/opensesame/)  
  Research paper and mathematical analysis detailing De Bruijn sequence generation for 10-position gate and garage door receivers.
- [De Bruijn, N. G.: "A Combinatorial Problem" (Proceedings of the Royal Netherlands Academy of Arts and Sciences)](https://dwc.knaw.nl/DL/publications/PU00018235.pdf)  
  The mathematical foundation for minimal universal cycle graphs and sliding window sequence generation.

