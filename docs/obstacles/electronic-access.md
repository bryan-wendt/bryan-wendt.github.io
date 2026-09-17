---
sidebar_position: 3
title: Electronic Access Control & Sensors
sidebar_label: Electronic Access & Sensors
tags: [obstacles, electronic, maglocks, strikes, rex-sensors, rfid]
---

# Electronic Access Control & Sensors

Electronic access control (EAC) systems integrate electrified locking hardware, credential readers (RFID, biometric, keypad), and safety release sensors.

---

## Request to Exit (REX) Sensor Attacks & Configuration

![Request to Exit Sensor Detection Cone and Bypass Vector](/img/wiki/obstacles/rex-sensor-cone.svg)
*Figure 1: Passive Infrared (PIR) detection cone above door header and thermal spray injection vector through meeting seam. Source & Reference: [Babak Javadi & Deviant Ollam Conference Presentations (DEF CON / HOPE)](/docs/resources/references).*

Most electronic access doors utilize passive infrared (PIR) or dual-technology Request to Exit (REX) sensors mounted above the interior door frame to automatically release magnetic locks when someone approaches to exit.

### Bypass Vectors
- **Thermal Spray / Canned Air:** Inverting a compressed air canister sprays sub-zero refrigerant vapor through the door gap. The extreme temperature delta triggers the PIR sensor, unlocking the door instantly.
- **Physical Targets (Warmth/Motion):** Sliding an object (paper sheet, inflatable balloon, heated wire) through the meeting gap or transom into the sensor's field of view.
- **Optical Masking:** Spraying hairspray or clear acrylic onto the lens can blind the sensor without physical disassembly.

### Internal REX Sensor Architecture & DIP Switches
Modern commercial REX sensors (e.g., Bosch DS150i, Honeywell IS310) feature internal DIP switches and adjustment potentiometers accessible beneath the snap-on plastic cover:

| Configuration Setting | Options | Operational Function |
| :--- | :--- | :--- |
| **Relay Mode** | Fail-Safe (NC) / Fail-Secure (NO) | Selects whether relay contacts open or close upon detection |
| **Timer Duration** | 0.5 sec to 60 sec | Sets how long the lock remains unlocked after motion ceases |
| **Timer Reset** | Resettable / Non-resettable | Determines if continuous motion re-triggers the countdown |
| **PIR Sensitivity** | Low / Medium / High | Sets detection threshold; low sensitivity resists thermal spray bypasses |
| **Tamper Switch** | Internal microswitch | Signals access panel alarm if exterior sensor housing is pried open |

---

## The Wiegand Bus Physical Architecture

Between the exterior card reader and the interior door controller, credentials travel over a standardized 4-conductor to 6-conductor copper cable harness:

| Conductor Color | Standard Function | Electrical Specification | Physical Security Consideration |
| :--- | :--- | :--- | :--- |
| **Red** | Power (+12V DC) | +12V DC nominal power | Interception point for inline hardware sniffers (ESPkey) |
| **Black** | Ground (GND) | Common 0V reference | Shared signal ground |
| **Green** | Data 0 (D0) | 5V TTL logic; 50µs falling pulses | Falling edge indicates logical "0" |
| **White** | Data 1 (D1) | 5V TTL logic; 50µs falling pulses | Falling edge indicates logical "1" |
| **Brown** | LED Control | Open-collector active low | Controller illuminates green/red reader LEDs |
| **Orange** | Beeper Control | Open-collector active low | Controller commands reader audio tone |

Because standard Wiegand signaling is unencrypted and carries no authentication, connecting a high-impedance hardware sniffer directly across the Green (D0) and White (D1) conductors allows an attacker to intercept all badge transmissions or inject unauthorized unlock commands.

---

## Hardware Classifications

| Hardware Type | Operational Mode | Attack Vectors |
| :--- | :--- | :--- |
| **Magnetic Locks (Maglocks)** | Fail-Safe (Power cut releases lock) | REX sensor triggering, power interruption, magnetic armature interference |
| **Electric Strikes** | Fail-Secure (Power needed to unlock) or Fail-Safe | Mechanical latch slipping, auxiliary pin exploitation |
| **Electrified Mortise Locks** | Integrated solenoid in lock case | REX sensor triggering, mechanical picking of key override |

---

## Related Documentation

- [Credential, Badge & Reader Identification](/docs/identification/credentials-and-badges)
- [RFID & Contactless Access Mechanisms](/docs/mechanisms/rfid-access)
- [RFID Attacks & Exploits](/docs/techniques/rfid-attacks)
- [Electronic & RFID Tools (Proxmark3 & ESPkey)](/docs/tools/electronic-tools)
- [Bypass Techniques Matrix](/docs/techniques/bypass-methods)

---

## Defensive Hardening

- **Upgrade to OSDP (Open Supervised Device Protocol):** Replace legacy Wiegand wiring with encrypted RS-485 OSDP v2 utilizing AES-128 encryption, defeating bus sniffing and inline replay.
- **Dual-Technology REX Sensors:** Deploy radar/microwave combined with PIR to verify physical mass and velocity before unlocking.
- **Sensor Shrouding & Placement:** Mount sensors recessed away from door edges and install astragals or interlocking weather seals to eliminate physical and thermal probe vectors.
- **Tamper Monitoring:** Ensure reader and REX tamper switches are actively monitored by the building security operations center (SOC).
