---
sidebar_position: 6
title: "RFID Sniffing, Cloning & Cryptographic Exploits"
sidebar_label: RFID Attacks & Exploits
tags: [techniques, rfid, cloning, t5577, mifare, iclass, loclass, darkside]
---

# RFID Sniffing, Cloning & Cryptographic Exploits

Radio Frequency Identification (RFID) systems are vulnerable across both physical and cryptographic domains. Attacks range from simple plaintext replay of low-frequency credentials to advanced mathematical cryptanalysis of proprietary smartcard ciphers.

---

## Low-Frequency (125 kHz) Exploitation

Because standard 125 kHz credentials (such as HID Prox, EM4100, AWID, and Indala) transmit their data unencrypted, exploitation relies on simple capture and re-encoding:

### 1. Long-Range Sniffing
Using a high-gain battery-powered resonant coil antenna (such as the T-Rex or Proxmark with long-range LF antenna), an attacker can capture card emissions from distances of 1 to 3 feet in crowded environments (e.g., elevators, lobbies, coffee shops).

### 2. Cloning to Atmel T5577 Silicon
The **Atmel/Microchip T5577** is an electrically erasable, programmable multi-standard RFID transponder chip. It can be programmed to emulate almost any 125 kHz protocol by setting its internal Block 0 configuration register:

```text
[ Read Target Card ] ===> [ Extract FC & Card # ] ===> [ Write to T5577 Block 0 & 1 ]
   (e.g., HID Prox)             (e.g., FC 102, CN 48921)            (T5577 Now Mimics HID)
```

- **Wiping & Programming:** Writing the appropriate modulation mode (FSK2a for HID Prox, PSK for Indala, Manchester ASK for EM4100) makes the T5577 physically indistinguishable from an original factory card to any standard reader.

---

## High-Frequency (13.56 MHz) Cryptographic Exploits

### MIFARE Classic Attacks

Although MIFARE Classic incorporates the proprietary **Crypto-1** stream cipher, severe mathematical flaws in its Pseudo-Random Number Generator (PRNG) enable full key recovery:

1. **Darkside Attack (Nicolas Courtois):** Used when **no** sector keys are known. Exploit timing discrepancies and parity bit leakage to deduce the internal state of the cipher, revealing at least one valid sector key in minutes.
2. **Nested Attack:** Used when at least **one** sector key is known (such as factory default transport keys `FFFFFFFFFFFF` or `A0A1A2A3A4A5`). The attacker authenticates to the known sector, requests nonces from target unknown sectors, and correlates the deterministic PRNG progression to derive all 16 sector keys in seconds.
3. **Hardnested Attack:** Targets newer MIFARE Classic EV1 cards featuring hardened, non-deterministic PRNGs. Exploits statistical biases in keystream generation, requiring harvesting thousands of nonces to mathematically solve for secret keys.
4. **UID Cloning via "Magic Cards":** Standard MIFARE cards have a factory-locked Block 0 containing the Card Serial Number (UID). "Magic Cards" bypass this restriction:
   - **Gen 1 (Backdoor):** Responds to special non-standard Chinese backdoor commands (`0x40`, `0x43`) to overwrite Block 0.
   - **Gen 2 (Direct Write / CUID):** Accepts standard write commands to Block 0 without requiring backdoor protocols, defeating readers with backdoor detection algorithms.

---

## HID iCLASS Exploits & The "loclass" Attack

Standard HID iCLASS security was broken in 2010 when researchers extracted the global factory master key from reader EEPROMs:

```text
       +---------------------------------------------+
       |             HID iCLASS Attacks              |
       +----------------------+----------------------+
                              |
       +----------------------+----------------------+
       |                                             |
[ Standard Security ]                          [ iCLASS Elite ]
  - Global Master Key (`afa7...3378`)            - Custom Enterprise Master Key
  - Block 7 readable directly                    - Cannot attack card directly
  - Instant cloning via Proxmark                 - Must harvest nonces from READER
                                                 - Offline cracking via `loclass`
```

### 1. Standard Security Exploitation
On standard iCLASS systems, Block 7 (which contains the card's encrypted credential data) is encrypted with the global factory key. Because this key is publicly known in the research community, any Proxmark3 can read Block 7, decrypt the Wiegand payload, and write a functional clone card immediately.

### 2. The iCLASS Elite "loclass" Attack
Many high-security enterprises deploy **iCLASS Elite**, replacing the standard master key with a proprietary custom key unique to that organization. Because the card cannot be decrypted with the standard key, the attack targets the **physical card reader**:

1. **Reader Interrogation (`sim 2`):** The attacker presents an emulated card (using a Proxmark3) to an installed, operational wall reader.
2. **Harvesting Mutual Authentication Nonces:** The reader attempts to authenticate the simulated card using its internal Elite key, transmitting cryptographic challenges and Message Authentication Codes (MACs).
3. **Offline Key Recovery (`loclass`):** The harvested nonces are processed offline using mathematical lookup tables. The `loclass` algorithm recovers the organization's secret Elite Master Key.
4. **Full System Compromise:** Once the Elite Master Key is recovered, the attacker can decrypt every card in the entire enterprise and originate valid badges for any facility worldwide.

---

## Dallas 1-Wire / iButton Sniffing & Emulation

Dallas DS1990A touch memory keys transmit their 64-bit registration ROM over an unencrypted 1-Wire bus:

1. **Sniffing:** When an authorized user touches their fob to the reader plate, an inline tap or handheld probe reads the 64-bit bitstream.
2. **Cloning to RW1990:** The 64-bit ID (Family Code + Serial Number + CRC) is written directly into an **RW1990 rewritable electronic key fob**, producing an identical physical clone.
3. **Direct Bus Emulation:** A microcontroller or handheld tool (such as a Flipper Zero or Raspberry Pi Pico) can emulate the DS1990A silicon directly against the two reader contacts to trigger door unlocking.

---

## Authoritative Literature & Scientific Research

- [Flavio D. Garcia, Peter van Rossum, Roel Verdult, Ronny Wichers Schreur: "Dismantling iCLASS and iCLASS Elite" (ESORICS 2012)](https://www.researchgate.net/publication/235916470_Dismantling_iClass_and_iClass_Elite)  
  The seminal peer-reviewed research proving the full cryptographic compromise of HID iCLASS and iCLASS Elite key diversification.
- [Nicolas T. Courtois: "The Dark Side of Security by Obscurity - and Cloning MiFare Classic Rail Cards" (IACR 2009/137)](https://eprint.iacr.org/2009/137.pdf)  
  Mathematical proof and algorithmic implementation of the Darkside attack against Crypto-1.
- [Proxmark3 Community Repository & Research Documentation](https://github.com/RfidResearchGroup/proxmark3)  
  Comprehensive open-source documentation for LF sniffing, T5577 configuration, and `loclass` implementation.

