---
sidebar_position: 5
title: "Electronic Tools: Proxmark3 & ESPkey"
sidebar_label: Electronic & RFID Tools
tags: [tools, electronic, proxmark3, espkey, wiegand, rfid, hardware-implant]
---

# Electronic Tools: Proxmark3 & ESPkey

Electronic physical penetration testing relies on specialized radio frequency diagnostic equipment and hardware bus implants to analyze, intercept, and manipulate access control signals.

Two primary tools dominate professional engagements:
1. **Proxmark3:** The dedicated multi-frequency RFID swiss-army knife for card reading, sniffing, cloning, and cryptographic analysis.
2. **ESPkey:** A covert inline hardware implant for tapping, sniffing, and replaying Wiegand reader bus communications.

---

## Proxmark3 Command Center & Hardware Reference

The Proxmark3 (especially modern iterations like the RDV4 or Easy running the **Iceman** open-source firmware) provides direct, low-level control over the radio interface.

### Hardware Tuning (`hw tune`)
Before executing read or simulation attacks, verify that the antenna coils are properly resonant:
```bash
pm3 --> hw tune
```
- **LF Antenna:** Operating voltage should measure **25V to 45V+**. If voltage is low, reposition the antenna board or adjust tuning jumpers.
- **HF Antenna:** Operating voltage should measure **5V to 15V+** (dropping significantly when a card enters the field).

---

## Low-Frequency (125 kHz) Commands

```bash
# Automated Card Identification
pm3 --> lf search

# HID Prox Operations
pm3 --> lf hid read                    # Interrogate target card in field
pm3 --> lf hid clone <TAG_ID>          # Clone 26-bit ID directly to a T5577 blank
pm3 --> lf hid sim <TAG_ID>            # Emulate card directly from Proxmark against reader

# Indala (Motorola) Operations
pm3 --> lf indala read                 # Read 64-bit/26-bit Indala credential
pm3 --> lf indala clone <TAG_ID>       # Clone Indala ID to T5577 chip

# EM410x & AWID Operations
pm3 --> lf em 410xread                 # Read standard EM4100/4102 badge
pm3 --> lf em 410xwrite <TAG_ID> 1     # Write to T5577 in EM mode
pm3 --> lf awid clone <FC> <CARD_NUM>  # Clone AWID facility code and card number

# T5577 Chip Management
pm3 --> lf t55xx detect                # Verify T5577 chip presence
pm3 --> lf t55xx wipe                  # Zero out all blocks to factory default
```

---

## High-Frequency (13.56 MHz) Commands

```bash
# Automated High-Frequency Identification
pm3 --> hf search

# MIFARE Classic Automated Cracking
pm3 --> hf mf autopwn                  # Automatically executes Darkside, Nested, and Hardnested attacks
pm3 --> hf mf nested 1 11 B FFFFFFFFFFFF d   # Nested attack using known default key on sector 11
pm3 --> hf mf dump                     # Dumps all 16 sectors to a binary file
pm3 --> hf mf cload <DUMP_FILE>        # Restores dump to a Gen 1 Magic Card
pm3 --> hf mf csetuid <UID> <ATQA> <SAK> # Sets UID on Chinese magic card

# HID iCLASS Operations
pm3 --> hf iclass managekeys -n 0 -k <STANDARD_KEY> # Load standard master key into memory
pm3 --> hf iclass readblk b 07 k 0     # Read encrypted Wiegand payload block 7 using key 0
pm3 --> hf iclass writeblk b 07 d <DATA> k 0       # Write modified credentials to clone card

# iCLASS Elite Attack against Wall Reader
pm3 --> hf iclass sim 2                # Simulates CSN against wall reader to harvest authentication nonces
pm3 --> hf iclass loclass -f iclass_mac_attack.bin # Offline brute force to extract company Elite Key
```

---

## ESPkey Wiegand Bus Sniffer & Replay Implant

The **ESPkey** is a covert hardware implant designed to be installed inline between a wall-mounted card reader and the exterior door controller panel.

```text
[ Card Reader ]
       |
  (4-Wire Bus)
       |
       v
  [ ESPkey ] <---- Sniffs Wiegand Pulses; Hosts WiFi Captive Portal
       |
       v
[ Access Control Panel / Controller ]
```

### Physical Wiring Harness & Installation
The standard Wiegand bus utilizes a 4-conductor connection:

| Conductor Wire | Color Code | Voltage / Function | ESPkey Connection Point |
| :--- | :--- | :--- | :--- |
| **+12V DC** | Red | +12V DC power from controller | `VIN` / `+12V` (Power input) |
| **Ground** | Black | Common signal ground | `GND` (System common) |
| **Data 0 (D0)** | Green | Transmits logical "0" via 5V -> 0V falling pulse | `D0` (High-impedance sniffer input) |
| **Data 1 (D1)** | White | Transmits logical "1" via 5V -> 0V falling pulse | `D1` (High-impedance sniffer input) |

### Operational Features
1. **Passive Logging:** Passively records every badge scanned at the reader, extracting the raw bit length, Facility Code, and Card Number onto internal flash memory.
2. **WiFi Web Interface:** Generates a covert 802.11 access point. An operator standing outside the building can connect via smartphone, view the live capture log, and download badge credentials.
3. **Badge Injection & Replay:** The operator can click any captured badge on the web UI to inject those exact Wiegand pulses onto the live bus, instantly commanding the backend access controller to release the magnetic lock or electric strike.

### Hardware Reset Procedure
If the ESPkey firmware locks or WiFi credentials are lost:
1. Disconnect the device from the 12V power source.
2. Bridge the designated hardware reset pads or hold the onboard tactile button.
3. Apply power while holding the bridge for 5 seconds until the status LED flashes rapidly, restoring factory default access point settings.

---

## Authoritative Literature & Open-Source Projects

- [Proxmark3 Iceman Official GitHub Repository](https://github.com/RfidResearchGroup/proxmark3)  
  The definitive open-source firmware, command documentation, and hardware schematics for the Proxmark3 RDV4.
- [Bishop Fox / Corey Harding: ESPkey Hardware Project](https://github.com/BishopFox/ESPKey)  
  Open-source hardware schematics, PCB Gerber files, and firmware for the ESPkey Wiegand tapping implant.
- [SIA AC-01-1996.10: Access Control Wiegand Standard Protocol](https://www.securityindustry.org/industry-standards/sia-ac-01-1996-10/)  
  Official physical signaling standard defining pulse width (50 µs) and pulse interval (1 ms to 2 ms) for Data 0 / Data 1 lines.

