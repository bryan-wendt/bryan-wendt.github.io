---
sidebar_position: 6
title: "RFID & Contactless Access Control Mechanisms"
sidebar_label: RFID & Contactless Access
tags: [mechanisms, rfid, wiegand, hid-prox, iclass, mifare, 1wire, ibutton]
---

# RFID & Contactless Access Control Mechanisms

Radio Frequency Identification (RFID) and contactless smartcard mechanisms govern the transmission of identity credentials over air interfaces. Understanding modulation schemes, framing architectures, and cryptographic handshakes is essential for assessing electronic access control security.

---

## 125 kHz Low-Frequency (LF) Signaling

Low-frequency RFID systems operate primarily at **125 kHz** (with some automotive/animal tracking systems at 134.2 kHz) through magnetic near-field inductive coupling:

1. **Power Transfer:** The reader's exciter coil continuously generates an alternating electromagnetic field. When a passive card enters the field, magnetic flux induces an AC voltage across the card's internal antenna coil, powering the internal microchip.
2. **Backscatter Modulation:** The card transmits its identification data by cyclically loading down the reader's RF field through an internal switching transistor (load modulation):

| Modulation Scheme | Engineering Principle | Primary Implementation |
| :--- | :--- | :--- |
| **Amplitude Shift Keying (ASK)** | Card modulates field amplitude by switching resistive loads | EM4100, EM4102, Securakey |
| **Frequency Shift Keying (FSK)** | Card shifts between two subcarrier frequencies (e.g., 12.5 kHz and 10 kHz) | HID Prox (125 kHz carrier) |
| **Phase Shift Keying (PSK)** | Card introduces a 180-degree phase shift in the carrier waveform | Indala (Motorola), Keri Systems |

---

## The 26-Bit Wiegand Frame (H10301 Standard)

The open **H10301 26-bit Wiegand format** is the most widely deployed credential format in the world:

```text
Bit Position:  1   2 . . . . . . 9   10 . . . . . . . . . . . 25   26
Field:        [P] [  Facility Code  ] [      Card Number        ]  [P]
Width:       1-bit      8-bits                  16-bits           1-bit
```

### Frame Breakdown
- **Bit 1 (Leading Even Parity):** Calculated across the first 12 data bits (Bits 2 through 13).
- **Bits 2–9 (Facility Code / Site Code):** 8-bit integer establishing the facility identity (`0` to `255`).
- **Bits 10–25 (Card Number):** 16-bit integer representing the user credential (`0` to `65,535`).
- **Bit 26 (Trailing Odd Parity):** Calculated across the final 12 data bits (Bits 14 through 25).

Because standard 125 kHz HID Prox credentials transmit this 26-bit frame unencrypted in plaintext over radio frequencies, anyone in physical proximity with an RFID sniffer can capture and replay the credential.

---

## 13.56 MHz High-Frequency (HF) Smartcards

High-frequency credentials operate under international standards (**ISO/IEC 14443** and **ISO/IEC 15693**) and support bidirectional challenge-response cryptography.

### MIFARE Classic Architecture (ISO 14443A)
- **Memory Organization:** Divided into 16 sectors (in 1K cards), each containing 4 blocks of 16 bytes.
- **Sector Trailers:** Block 3 of each sector contains two distinct 48-bit cryptographic keys: **Key A** and **Key B**, alongside programmable **Access Bits**.
- **Crypto-1 Cipher:** A proprietary stream cipher used to authenticate sector access. Crypto-1 suffers from catastrophic mathematical vulnerabilities (weak pseudo-random number generation) that allow full key recovery.

### HID iCLASS Architecture (ISO 15693 / 14443B)
- **Application Areas:** Memory is structured into Application Areas (e.g., Application Area 1 for access control; Application Area 2 for biometric templates or cash accounts).
- **Cryptographic Keys:**
  - **Standard Security:** Uses a global factory master key embedded across all standard HID iCLASS readers worldwide.
  - **iCLASS Elite:** Replaces the factory master key with a proprietary custom key unique to an individual enterprise or agency.
- **Key Diversification:** The reader and card authenticate using a diversified key calculated from the card's unique 64-bit Card Serial Number (CSN) combined with the master key using DES / 3DES algorithms.

---

## Dallas 1-Wire / iButton Technology (DS1990A)

The Dallas Semiconductor / Maxim Integrated **iButton** is an electronic credential housed in a durable 16mm stainless steel coin package ("MicroCan"):

```text
      +-----------------------------+
      | Data Lid (1-Wire Signal)    |
     +-------------------------------+
     | Insulating Grommet Ring       |
    +---------------------------------+
    | Stainless Steel Can (Ground)     |
    +---------------------------------+
```

### Protocol & Memory Architecture
1. **Physical Interface:** Two physical contact points: the center lid (1-Wire Data) and the outer rim (Signal Ground).
2. **Parasitic Power:** The internal integrated circuit pulls operating power directly from the 5V pull-up data line through an internal diode, charging an internal 800 pF storage capacitor.
3. **64-Bit Lasered ROM:** Each iButton contains a factory-lasered, read-only 64-bit identity:
   - **Bits 0–7 (Family Code):** Fixed byte designating device type (`01h` for DS1990A serial number).
   - **Bits 8–55 (Serial Number):** 48-bit unique factory serial number (`2^48` combinations).
   - **Bits 56–63 (CRC):** 8-bit Cyclic Redundancy Check calculated using the Dallas 1-Wire polynomial:
     `CRC = X^8 + X^5 + X^4 + 1`

Because standard DS1990A contact fobs transmit their 64-bit serial number in clear text upon contact, touching two probes to the reader reads the code, which can be duplicated to a rewritable DS1990A clone fob (RW1990).

---

## Authoritative Standards & Technical Manuals

- [ISO/IEC 14443-1: Contactless Integrated Circuit Cards - Proximity Cards](https://www.iso.org/standard/73596.html)  
  International standard specifying physical characteristics, radio frequency power, signal interface, and initialization/anticollision protocols.
- [ISO/IEC 15693-1: Contactless Integrated Circuit Cards - Vicinity Cards](https://www.iso.org/standard/73597.html)  
  Standard governing extended-range high-frequency smartcards, forming the physical layer of HID iCLASS.
- [Security Industry Association (SIA) AC-01-1996.10 Wiegand Standard](https://www.securityindustry.org/industry-standards/sia-ac-01-1996-10/)  
  The standardized hardware interface protocol for reader-to-controller data communication.
- [Maxim / Analog Devices Tutorial 1796: Overview of 1-Wire Technology and Its Use](https://www.analog.com/en/resources/technical-articles/overview-of-1-wire-technology-and-its-use.html)  
  Official engineering tutorial detailing the 1-Wire open-drain signaling architecture, parasitic power operation, and 64-bit ROM registration.

