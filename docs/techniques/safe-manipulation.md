---
sidebar_position: 4
title: "Mechanical Safe Lock Manipulation"
sidebar_label: Safe Manipulation
tags: [techniques, safes, manipulation, dialing, graphing, contact-points]
---

# Mechanical Safe Lock Manipulation

Safe lock manipulation is the art and science of opening a mechanical combination safe lock through tactile and visual observation of internal mechanical clearances—without drilling, cutting, or damaging the container.

---

## The Physical Basis of Manipulation

Safe locks are precision mechanisms, but microscopic manufacturing tolerances make it physically impossible to build perfectly identical wheels. When the fence rests against the rotating wheel pack:

1. **Out-of-Round Tolerances:** Every wheel is slightly eccentric or out-of-round by several ten-thousandths of an inch.
2. **Contact Point Shifts:** As the drive cam turns, the lever nose taps against the raised edges of the drive cam gate. The exact dial positions where this metal-on-metal contact occurs are called the **Contact Points**.
3. **Gate Signatures:** When a wheel's gate notch aligns directly underneath the fence, the fence drops microscopic fractions of an inch deeper. This tiny drop causes a measurable change in where the lever nose hits the drive cam, producing an unmistakable **Gate Signature**.

```text
       [ Lever Pivots Downward ]
                  |
     +------------+------------+
     |                         |
[ Lever Nose ]              [ Fence ]
     |                         |
(Taps Drive Cam)       (Drops into Gate)
     |                         |
Contact Point Shifts     Wheel Gate Aligned!
```

---

## Contact Points & Reading the Dial

On a typical 100-number dial, the drive cam gate usually resides between numbers **0 and 20**:

- **Left Contact Point (LCP):** Turn the dial gently to the left until the lever nose taps the left side of the drive cam gate (e.g., dial reads `10.25`).
- **Right Contact Point (RCP):** Turn the dial gently to the right until the lever nose taps the right side of the drive cam gate (e.g., dial reads `14.75`).
- **Contact Area:** The distance between the contact points:
  `Contact Area = RCP - LCP = 14.75 - 10.25 = 4.50 numbers`

By systematically dialing wheels to test positions and recording the resulting contact point readings, an operator plots the internal profile of every wheel.

---

## The Graphing Methodology

Manipulation relies on isolating one wheel at a time to prevent overlapping gate signatures from confusing the readings.

### Step 1: Establish Baseline & Drive Cam Profile
Before moving any wheels, rotate the dial 4 full turns to clear the wheel pack, park all wheels at `0`, and measure the LCP and RCP. Record the baseline contact spread.

### Step 2: Wheel Isolation (Testing Wheel 3)
Wheel 3 (the front wheel closest to the drive cam) is tested first because it can be dialed directly with only 2 rotations:

1. Turn the dial 4 times Left to park Wheels 1 and 2 together at position `0`.
2. Turn Right to test number `0` on Wheel 3.
3. Turn Left into the contact area and measure the Left Contact Point and Right Contact Point. Record the readings.
4. Turn Right past the pickup point to test number `2.5` on Wheel 3.
5. Repeat across all 40 test increments (`0, 2.5, 5, 7.5, 10 ... 97.5`).

```text
Dial Position | LCP   | RCP   | Spread | Indication
---------------------------------------------------
...
22.5          | 10.25 | 14.75 | 4.50   | Flat
25.0          | 10.50 | 14.50 | 4.00   | Gate Signature (Low Spot)
27.5          | 10.25 | 14.75 | 4.50   | Flat
...
```

### Step 3: Low Spot Analysis & Gate Identification
When plotted on a graph (tenths sheet), most readings form a relatively flat line corresponding to the round perimeter of the wheel. However, when the true gate passes under the fence:
- Both contact points will shift inwards or outwards, or the total contact spread will compress dramatically.
- The deepest depression is the **True Gate**. Record the identified gate location for Wheel 3 (e.g., `25`).

### Step 4: Testing Wheel 2 and Wheel 1
Once Wheel 3 is mapped:
1. Re-park Wheels 1 and 2 together, leaving Wheel 3 permanently aligned at its true gate.
2. Dial Wheel 2 in increments of 2.5 turns (using 3 turns Right) to identify its gate signature.
3. With Wheels 2 and 3 aligned, test Wheel 1 across the remaining numbers.
4. As the final gate aligns under the fence, the lever drops completely into the drive cam gate. Turning the dial Right past the contact area will stop solidly and retract the safe bolt.

---

## Chartless Manipulation

Experienced safe technicians frequently perform **Chartless Manipulation** without graphing on paper:
- Rather than recording every 2.5 numbers across the entire dial, the technician uses tactile feel to quickly scan the wheel pack for noticeable high spots and low spots.
- Once an operator identifies where the fence hangs lowest, they test candidate numbers by feel, reducing the opening process from several hours of graphing to 15 to 30 minutes.

---

## 4-Wheel Lock Considerations

Institutional vaults, bank treasuries, and high-security commercial safes frequently employ 4-wheel combination locks (such as the S&G 6500 series):
- **Dialing Sequence:** `5 Times Left -> 4 Times Right -> 3 Times Left -> 2 Times Right -> Turn Left to Stop`.
- **Higher Resistance:** A 4-wheel lock expands the combination space to `100^4 = 100,000,000` possible combinations. However, manipulation techniques remain functionally identical: isolate Wheel 4, map its gate, then proceed sequentially through Wheels 3, 2, and 1.

---

## Authoritative Literature & Scientific Research

- [Matt Blaze: "Safecracking for the Computer Scientist" (2004)](https://www.mattblaze.org/papers/safelocks.pdf)  
  Rigorous computer science and cryptographic analysis of mechanical safe lock vulnerabilities, algorithmic wheel isolation, and information theory in contact point measurement.
- [The National Locksmith Guide to Manipulation (Robert Sieveking)](https://www.goodreads.com/book/show/2850428-the-national-locksmith-guide-to-manipulation)  
  The foundational locksmith trade textbook detailing hands-on mechanical manipulation, tenths sheets, S&G 6730 diagnostics, and dial reading techniques.
- [Sargent & Greenleaf Mechanical Safe Lock Guide (6700 / 6730 Series)](https://sargentandgreenleaf.com/knowledgebase/knowledgebase-2018-01-25-mechanical-safe-lock-guide/)  
  Provides engineering blueprints of the drive cam gate, lever nose angle, and fence clearance specifications.

