---
sidebar_position: 3
title: Optical Key Decoding & Master Key Reconstruction
sidebar_label: Key Decoding & Math
tags: [techniques, decoding, master-keying, space-depth, blind-codes, calipers]
---

# Optical Key Decoding & Master Key Reconstruction

Key decoding is the non-destructive process of translating a physical key blade, key photograph, or cylinder pin stack into precise numerical bitting codes. Once decoded, an operator can originate working keys using code machines, calculate master key systems, or identify systemic security flaws.

---

## Decoding Methodologies

### 1. Optical / Visual Sight Reading
Experienced evaluators can visually determine bitting numbers by assessing root depths relative to the key blade width, blade spine, and adjacent cuts:
- **Reference Ramps:** Compare the transition angle between adjacent cuts.
- **Root Flat Width:** Modern key machines leave distinct flat bottoms (.030" to .050") that delineate individual pin contact areas.
- **Perspective Distortion Correction:** When decoding from photographic evidence, establish a known reference constant (such as the standard 0.500" bow diameter or the 0.080" blade thickness) to calibrate depth pixels.

### 2. Physical Card Gauges (Key Decoders)
Decoder cards (metal or rigid plastic shims cut with stepped gauge notches) allow direct field reading:
- Slide the key blade along the stepped notch corresponding to the manufacturer until the blade stops.
- Read the indicated bitting number directly from the engraved index scale.

### 3. Precision Dial / Digital Calipers
For high-precision originations, measure the root depth directly from the bottom edge of the key blade (opposite the pin cuts) to the center flat of each cut:

`Root Depth = Total Blade Width - Cut Depth`

---

## Space & Depth Reference Table

Use these caliper root depths (in decimal inches) to correlate measured blade height with factory bitting numbers:

| Bitting # | Schlage Classic | Kwikset | Yale Standard | Sargent | American Lock | BEST A-2 | Master Lock | Arrow |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | .335" | — | .320" | — | — | .318" | .285" | .324" |
| **1** | .320" | .329" | .301" | .330" | .286" | .306" | .270" | .310" |
| **2** | .305" | .306" | .282" | .310" | .271" | .293" | .255" | .296" |
| **3** | .290" | .283" | .263" | .290" | .256" | .281" | .240" | .282" |
| **4** | .275" | .260" | .244" | .270" | .241" | .268" | .225" | .268" |
| **5** | .260" | .237" | .225" | .250" | .226" | .256" | .210" | .254" |
| **6** | .245" | .214" | .206" | .230" | .211" | .243" | .195" | .240" |
| **7** | .230" | — | .187" | .210" | .196" | .231" | .180" | .226" |
| **8** | .215" | — | .168" | .190" | .181" | .218" | — | .212" |
| **9** | .200" | — | .149" | .170" | — | .206" | — | .198" |
| **Step (Inc.)**| **.015"** | **.023"** | **.019"** | **.020"** | **.015"** | **.0125"** | **.015"** | **.014"** |
| **First Cut** | .231" | .247" | .214" | .215" | .160" | .105" (Tip) | .185" | .264" |
| **Spacing** | .156" | .150" | .150" | .156" | .125" | .150" | .125" | .155" |

---

## Master Key System Mathematical Decoding

Master-keyed locks utilize master split wafers in one or more chambers to create multiple shear lines. In a 6-pin cylinder where each chamber contains a master wafer, the lock responds to `2^6 = 64` distinct working key bittings.

In 2002, computer scientist Matt Blaze published the mathematical breakthrough demonstrating that possession of **a single change key and brief access to an installed master-keyed cylinder** allows an attacker to reconstruct the Grand Master Key without disassembling the cylinder.

### The Progression Search Algorithm

1. **Obtain Baseline Key:** Begin with a known working change key. Assume the known bitting is:
   `Baseline = [6, 4, 6, 3, 6, 7]`
2. **Generate Exploratory Keys:** Duplicate the baseline key, but modify only **one** chamber position across all valid depths while leaving the remaining five cuts unchanged:
   - Key 1A: `[0, 4, 6, 3, 6, 7]`
   - Key 1B: `[2, 4, 6, 3, 6, 7]`
   - Key 1C: `[4, 4, 6, 3, 6, 7]`
   - Key 1D: `[6, 4, 6, 3, 6, 7]` *(Baseline - already known to work)*
   - Key 1E: `[8, 4, 6, 3, 6, 7]`
3. **Test Against Cylinder:** Insert each exploratory key into the target lock:
   - If cut depth 2 and cut depth 6 both turn the cylinder, Chamber 1 contains a master split wafer with cuts at both **2** and **6**.
4. **Determine Parity & Step Increments:**
   - Standard commercial systems (such as Schlage and Corbin Russwin) enforce a **2-step progression** (even cuts only or odd cuts only per chamber) to ensure master wafers are thick enough (.030" or greater) to prevent jamming.
   - If the known change cut is even (`6`), all other valid cuts in that chamber will almost certainly be even (`0, 2, 4, 8`).
5. **Iterate Across All Chambers:** Repeat the test for Chambers 2 through 6.
6. **Cross-Reference Secondary Locks:** Testing exploratory keys against a second office lock in the same building eliminates local sub-master cuts and isolates the constant cuts shared across the entire master tree—revealing the **Grand Master Key**.

---

## Padlock Blind Codes & Stamping Decoders

Padlocks frequently bear small alpha-numeric stampings on the cylinder plug face, shackle, or lock body. These markings fall into two categories:

### Direct Bitting Stamps
Common on fleet and utility padlocks (e.g., American Lock and institutional Master Locks). The stamped digits directly represent the depth bitting from shoulder to tip:
- Example: Stamp `35214` represents cuts: Position 1 = 3, Position 2 = 5, Position 3 = 2, Position 4 = 1, Position 5 = 4.

### Blind Codes
Commercial locks sold to consumers and businesses use indirect blind codes to prevent unauthorized key copying while allowing locksmiths to cut replacements using factory code books:
- Example: A Master Lock stamped `10R22` does not represent depths 1-0-2-2. Instead, the code corresponds to a lookup index in the Master Lock Code Book that maps `10R22` to factory bitting `2-0-4-3`.
- Padlock lookup tables (Master Lock, Yale, Saymaker) map thousands of historical blind code series to exact code cutter dial settings.

---

## Tubular Lock Decoding

Tubular (radial) keys are decoded by measuring the axial depth of the notches milled into the cylindrical barrel:

1. **Gauge Alignment:** Align the decoder with the rectangular exterior indexing notch.
2. **Radial Pin Numbering:** Number the positions clockwise from 1 to 7 (or 1 to 8) starting immediately following the alignment tab.
3. **Depth Verification:** Using a tubular feeler pick or dial caliper, measure depth from the circular key rim to the cut shelf:
   - Depth 1: .015"
   - Depth 2: .030"
   - Depth 3: .045"
   - Depth 4: .060"
   - Depth 5: .075"
   - Depth 6: .090"
   - Depth 7: .105"

---

## Academic Research & Public Domain References

- [Matt Blaze: "Cryptology and Physical Security: Rights Amplification in Master-Keyed Mechanical Locks" (IEEE Security & Privacy 2003 / Matt Blaze Papers Archive)](https://www.mattblaze.org/papers/mk.pdf)  
  The definitive foundational paper proving mathematical master key reconstruction and exploratory progression search attacks against pin tumbler cylinders.
- [Deviant Ollam: "Keys to the Kingdom: Impressioning, Privilege Escalation, and Key Duplication"](https://deviating.net/words/books/)  
  Covers physical caliper decoding, optical sight reading, key casting, and decoding card gauges.
- [HPC 1200 Series Blitz & Code Machine Technical Manual](https://hudsonlock.com/wp-content/uploads/2020/09/blitz-small.pdf)  
  Reference for space-and-depth code cards, micrometer table alignments, and zero-point cutter calibration.
- [Master Lock Technical Service Manual](https://www.masterlock.com/business/technical-service-manuals)  
  Cylinder combinating charts, blind code lookup indexes, and factory bitting rules.

