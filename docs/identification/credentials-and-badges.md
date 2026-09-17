---
sidebar_position: 3
title: "Credential, Badge & Reader Identification"
sidebar_label: Credentials & Badges
tags: [identification, rfid, credentials, badges, hid, iclass, readers]
---

# Credential, Badge & Reader Identification

Field identification of physical access control credentials (badges, key fobs, mobile credentials) and wall-mounted reader hardware allows physical red teams and security assessors to identify frequency, protocol, and encryption vulnerabilities prior to active engagement.

---

## Frequency & Form Factor Taxonomy

Access control credentials operate across two primary radio frequency bands:

```text
               +-----------------------------+
               | Physical Access Credentials |
               +--------------+--------------+
                              |
       +----------------------+----------------------+
       |                                             |
[ 125 kHz Low Frequency ]                  [ 13.56 MHz High Frequency ]
  - HID Prox (H10301)                        - HID iCLASS / iCLASS SE
  - Indala (Motorola)                        - MIFARE Classic / Plus
  - EM4100 / EM4102                          - MIFARE DESFire EV1/EV2/EV3
  - AWID / ioProx                            - HID SEOS
  - Unencrypted / Replay-Vulnerable          - Cryptographic Challenge-Response
```

### The Flashlight Antenna Test
When inspecting standard ISO PVC plastic badges, shining a high-intensity flashlight or smartphone LED directly through the card body reveals the internal copper antenna geometry:

- **125 kHz (Low Frequency):** Features a thick, tightly wound circular or oval copper spool with dozens of fine turns situated near the card edge.
- **13.56 MHz (High Frequency):** Features a wide, 3-to-5-turn rectangular etched metal loop running along the absolute outer perimeter of the card, connected to a small black microchip die.
- **Dual-Technology Cards (e.g., iCLASS Prox):** Contain **both** an outer rectangular HF loop and an internal circular LF spool embedded in a single laminate.

---

## Decoding HID Credential Exterior Laser Markings

HID Global credentials frequently bear laser-etched or inkjet alpha-numeric markings on the back lower corner. Under **HID Application Note AN0109**, these external markings provide critical technical information without requiring electronic reader interrogation:

```text
Example Marking:  * 10301 12345678-1  102  48921
                  |   |        |       |     |
                  A   B        C       D     E
```

| Field Code | Significance | Description |
| :--- | :--- | :--- |
| **A. Format Indicator** | Identifies the bit length | `*` = 26-bit (H10301)<br/>`.` = 37-bit without facility code (H10302)<br/>`:` = 37-bit with facility code (H10304)<br/>`#` = Corporate 1000 35-bit |
| **B. Format Number** | Direct format name | Direct numerical designation (e.g., `10301` = standard 26-bit Wiegand) |
| **C. Sales Order #** | Manufacturing tracking | Factory manufacturing batch and sequential assembly run |
| **D. Facility Code (FC)** | Site security identifier | 8-bit facility identifier (e.g., `102` = Site Code) |
| **E. Internal Card ID** | Unique user identifier | 16-bit individual credential badge number (e.g., `48921`) |

### Practical Field Impact
If an operator photographs or observes the back of an employee's badge displaying `* 10301 12345678-1 102 48921`, the card's entire bit stream is exposed:
- Format: Standard 26-bit H10301
- Facility Code: 102
- Card Number: 48921
- A clone can be programmed immediately to a blank T5577 card without electronic sniffing.

---

## Wall Reader Identification & Form Factors

Recognizing reader hardware indicates whether the system accepts legacy low-frequency credentials, encrypted smartcards, or both:

| Reader Family | Typical Enclosure | Frequency Capability | Visual & Physical Indicators |
| :--- | :--- | :--- | :--- |
| **HID MiniProx** | Narrow mullion | 125 kHz LF only | Slender curved black housing designed to mount on aluminum door frames |
| **HID Thinline II** | Single-gang switchbox | 125 kHz LF only | Low-profile square faceplate with beveled corners; centered two-color LED |
| **HID multiCLASS SE** | Mullion or Single-gang | **Dual (LF + HF)** | Modern beveled design with subtle textured face; reads both Prox and iCLASS |
| **HID Signo (20 / 40)**| Sleek modern profile | Multi-technology / Mobile | Modern rectangular body with continuous light bar at top; BLE/NFC enabled |
| **Indala Classic** | Wave / Arch profile | 125 kHz proprietary | Distinct curved wave design on faceplate; uses proprietary PSK encoding |

### Reader Audio Feedback Conventions
Card readers produce distinct audio beeper patterns corresponding to panel responses:
- **Single Short Beep:** Standard acknowledgment of a scanned credential.
- **Short Beep followed by Double Beep:** Credential successfully read, but access denied by the backend access control panel (unregistered user or schedule restriction).
- **Continuous Rapid Beeping:** Reader tamper switch triggered, loss of data communication with controller, or held-open alarm.

---

## Authoritative Standards & Manufacturer References

- [HID Global Cards & Credentials Architecture Guide](https://www.hidglobal.com/products/cards-and-credentials)  
  Official factory guide defining the serialization, symbol prefixes, and bit-format decoding formulas printed on HID credentials.
- [HID Global Technical Documentation Library](https://support.hidglobal.com/)  
  Complete manufacturer portal documenting part numbers, form factors, frequencies, and ordering options across Prox, iCLASS, and SEOS families.
- [Security Industry Association (SIA) Architectural Standards](https://www.securityindustry.org/industry-standards/)  
  Industry standards governing reader mounting configurations, single-gang enclosures, and visual notification conventions.

