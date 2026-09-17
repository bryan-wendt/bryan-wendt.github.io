---
sidebar_position: 5
title: "Mechanical Safe Lock & Dial Mechanisms"
sidebar_label: Safe & Vault Locks
tags: [mechanisms, safes, dials, ul768, group2, x09, lock-mechanics]
---

# Mechanical Safe Lock & Dial Mechanisms

Mechanical combination safe locks protect commercial safes, bank vaults, and government security containers. Unlike key-operated cylinders where pins move linearly, mechanical safe locks utilize a rotating wheel pack and fence mechanism that operates entirely through angular rotational tolerances.

---

## Anatomy of a 3-Wheel Combination Lock

A standard mechanical safe lock (such as the industry-standard Sargent & Greenleaf 6730 or La Gard 3330) consists of seven primary mechanical components:

```text
       [ Dial & Spindle ]
               |
               v
         [ Drive Cam ] ------------+
               |                    \ (Cam Gate)
               v                     v
         [ Wheel Pack ] <===== [ Lever & Fence ]
         (Wheel 1, 2, 3)             |
               |                     v
         [ Drive Flys ]         [ Lock Bolt ]
```

1. **Dial & Spindle:** The exterior graduated dial (typically numbered 0 to 99 or 0 to 49) connected through the safe door skin via a threaded spindle into the lock body.
2. **Drive Cam:** Directly pinned to the spindle inside the lock case. It rotates continuously with the dial, features a driving pin on its face, and cutouts called the **Drive Cam Gate** and **Contact Points**.
3. **Wheel Pack:** A stack of coaxial brass or aluminum discs mounted on a central post. A standard 3-wheel lock contains:
   - **Wheel 3 (Front Wheel):** Closest to the drive cam; driven directly by the drive cam pin.
   - **Wheel 2 (Center Wheel):** Driven by Wheel 3.
   - **Wheel 1 (Rear Wheel):** Driven by Wheel 2.
4. **Drive Flys (Lost Motion Devices):** Small movable dogs between adjacent wheels that provide lost motion. Because each fly can swing roughly 15 to 30 degrees before catching the next wheel, the wheels only turn together after multiple full rotations in a single direction.
5. **Wheel Gates:** Rectangular notches cut into the outer perimeter of each wheel disc.
6. **Fence:** A rigid, precision-ground bar extending perpendicularly across the tops of all wheels, attached to the pivoting **Lever**.
7. **Lever Nose & Bolt:** The lever rides above the drive cam. During normal dialing, the fence is held suspended above the wheels. When all wheel gates align directly underneath the fence, the lever nose drops into the drive cam gate, allowing the bolt to retract into the lock case.

---

## The Dialing Cycle & Lost Motion

To set each wheel independently without disturbing already positioned wheels, safe locks rely on rotational direction changes and decreasing turns:

```text
4 Times Left (Counter-Clockwise)  --> Sets Wheel 1 (Rear)
3 Times Right (Clockwise)         --> Sets Wheel 2 (Center)
2 Times Left (Counter-Clockwise)  --> Sets Wheel 3 (Front)
Turn Right until Dial Stops       --> Fence drops in; retracts bolt
```

### The Mechanism in Detail
- **Turn 1 (4x Left):** Continuous rotation picks up the drive cam, which catches Wheel 3, which catches Wheel 2, which catches Wheel 1. All three wheels are now rotating together. Stopping on the first number aligns Wheel 1's gate directly beneath the fence.
- **Turn 2 (3x Right):** Reversing direction causes the drive cam to release Wheel 1 (which stays parked). After completing lost-motion pickup, Wheels 3 and 2 turn together. Stopping on the second number positions Wheel 2.
- **Turn 3 (2x Left):** Reversing direction releases Wheel 2. Only Wheel 3 turns until it reaches the third combination number.
- **Final Turn (Right):** With all three gates aligned in a straight channel directly beneath the fence, the lever drops down. As the drive cam continues turning right, its shoulder engages the lever nose and pulls the lock bolt back.

---

## Underwriters Laboratories (UL 768) Classifications

Safe locks are formally evaluated and certified under **UL 768 (Standard for Combination Locks)** based on their precision tolerances, design complexity, and resistance to skilled manipulation:

| Rating | Attacker Skill Level | Certified Manipulation Resistance | Dialing Tolerance | Typical Hardware | Target Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Group 2** | Semi-skilled | Basic protection; tested against non-expert manipulation | +/- 1.0 to 1.25 numbers | S&G 6730, La Gard 3330 | Commercial cash safes, gun safes, retail drop boxes |
| **Group 2M** | Skilled | **2 person-hours** of expert manipulation resistance | +/- 0.5 to 0.75 numbers | S&G 6730M, La Gard 3332 | Commercial jewelers, pharmacy narcotics safes |
| **Group 1** | Highly skilled | **20 person-hours** of expert manipulation resistance | +/- 0.25 to 0.5 numbers | S&G 8500, La Gard 1985 | High-value vaults, defense contractor containers |
| **Group 1R** | Expert / Lab | **20 person-hours** plus **Radiological Resistance** | +/- 0.25 to 0.5 numbers | S&G 8400, S&G 8550 | Nuclear material storage, classified GSA facilities |

### Group 1R Radiological Protection
Group 1R locks replace traditional metallic brass wheels with non-metallic Delrin, acetal resin, or dense nylon materials. This prevents surreptitious radiography (using portable cobalt-60 or iridium-192 isotope gamma-ray emitters) from imaging wheel gate positions through the steel safe door.

---

## Electro-Mechanical High-Security Locks (GSA Class)

In US Government and classified defense installations, mechanical combination locks on GSA Class 5 and Class 6 containers and SCIF vault doors are superseded by specialized electro-mechanical locks meeting **Federal Specification FF-L-2740B**:

### Kaba Mas X-07, X-08, X-09, and X-10 Series

These locks combine mechanical manipulation immunity with high-reliability electronics:

- **Self-Powered Internal Generator:** The lock contains no internal batteries. Turning the exterior dial drives an internal permanent magnet stepper motor that generates electrical power to energize the microprocessor, liquid crystal display, and internal locking solenoid.
- **Liquid Crystal Display (LCD):** Numbers are presented on an LCD screen visible only to the operator standing directly in front of the dial, eliminating over-the-shoulder observation and optical telescope surveillance.
- **Microprocessor & Solenoid Gate:** The microprocessor compares dialed input against stored encrypted hashes. When valid, a high-speed internal solenoid releases an internal mechanical cam gate, permitting physical bolt retraction.
- **Audit & Anti-Tamper:** Detects and counts incorrect attempts, enforces time delays against brute-force dialing, and logs operational events into non-volatile memory.

---

## Authoritative Standards & Manufacturer References

- [Underwriters Laboratories UL 768 Standard for Combination Locks](https://www.shopulstandards.com/ProductDetail.aspx?productId=UL768_10_B_20060331)  
  The definitive North American testing standard governing Group 2, Group 2M, Group 1, and Group 1R combination locks.
- [GSA Federal Specification FF-L-2740B (DoD Lock Program Combination Locks)](https://exwc.navfac.navy.mil/DoD-Lock-Program/Security-Hardware/Combination-Locks/)  
  US Federal standard governing high-security combination locks installed on GSA Class 5 and Class 6 security containers and SCIF doors.
- [Sargent & Greenleaf Mechanical Safe Lock Guide (6730 Series)](https://sargentandgreenleaf.com/knowledgebase/knowledgebase-2018-01-25-mechanical-safe-lock-guide/)  
  The foundational industry benchmark manual for 3-wheel mechanical combination safe locks, wheel pack assembly, and spline key indexing.
- [Kaba Mas X-10 High-Security Lock Documentation](https://www.kabamas.com/x-10-high-security-lock/)  
  Official manufacturer technical documentation for self-powered electromechanical safe locks used in federal security containers.

