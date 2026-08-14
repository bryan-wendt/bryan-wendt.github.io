---
sidebar_position: 3
title: Electronic Access Control & Sensors
sidebar_label: Electronic Access & Sensors
tags: [obstacles, electronic, maglocks, strikes, rex-sensors, rfid]
---

# Electronic Access Control & Sensors

Electronic access control (EAC) systems integrate electrified locking hardware, credential readers (RFID, biometric, keypad), and safety release sensors.

---

## Hardware Classifications

| Hardware Type | Operational Mode | Attack Vectors |
| :--- | :--- | :--- |
| **Magnetic Locks (Maglocks)** | Fail-Safe (Power cut releases lock) | REX sensor triggering, power interruption, magnetic armature interference |
| **Electric Strikes** | Fail-Secure (Power needed to unlock) or Fail-Safe | Mechanical latch slipping, auxiliary pin exploitation |
| **Electrified Mortise Locks** | Integrated solenoid in lock case | REX sensor triggering, mechanical picking of key override |

---

## Request to Exit (REX) Sensor Attacks

Most electronic access doors utilize passive infrared (PIR) Request to Exit (REX) sensors mounted above the interior door frame to automatically release magnetic locks when someone approaches to exit.

- **Thermal Spray / Canned Air:** Inverting a compressed air canister sprays sub-zero refrigerant vapor through the door gap. The extreme temperature delta triggers the PIR sensor, unlocking the door instantly.
- **Physical Targets (Warmth/Motion):** Sliding an object (paper sheet, inflatable balloon, heated wire) through the meeting gap or transom into the sensor's field of view.

---

## Related Documentation

- [Bypass Techniques Matrix](/docs/techniques/bypass-methods)
- [Bypass Tools & Equipment](/docs/tools/bypass-tools)
- [Physical Security Glossary](/docs/resources/glossary)

---

## Defensive Hardening

- Configuring sound-detecting or dual-technology REX sensors (microwave + PIR).
- Shrouding the sensor body so its detection cone does not look directly down toward the door seam.
- Installing tight weather stripping and astragals to block line-of-sight airflow.
