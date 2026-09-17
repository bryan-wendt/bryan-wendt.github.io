---
sidebar_position: 4
title: "Interchangeable Core Mechanics: SFIC & LFIC"
sidebar_label: Interchangeable Cores
tags: [mechanisms, sfic, lfic, best, schlage, construction-cores, master-keying]
---

# Interchangeable Core Mechanics: SFIC & LFIC

Interchangeable cores (IC) are modular lock cylinders engineered to be extracted and replaced in seconds using a specialized **Control Key** without disassembling the surrounding lockset or door hardware. They are the standard for commercial office buildings, universities, hospital networks, and financial institutions.

There are two primary formats:
1. **Small Format Interchangeable Cores (SFIC):** Based on the standardized Frank Best figure-eight footprint and uniform pinning system.
2. **Large Format Interchangeable Cores (LFIC):** Proprietary, brand-specific modular cylinders manufactured by Schlage, Sargent, Corbin Russwin, Yale, and Medeco.

---

## Small Format Interchangeable Cores (SFIC)

SFIC cylinders feature an upper and lower lobe forming a standardized figure-eight cross-section. The bottom lobe contains the keyway plug, while the upper lobe contains the pin bible and spring chambers.

```text
       +---------------+
      /   Bible & Caps  \
     |   [Chamber Tops]  |
     \                   /
      +-----+     +-----+
            |     |
      +-----+     +-----+
     /  Control   Sleeve \ <--- Rotates independently to retract retaining lug
    |   +---------------+ |
    |  /      Plug       \|
    | |     [Keyway]      | <--- Rotates to actuate lock throw / cam
    |  \                 /|
     \  +---------------+ /
      +-----------------+
```

### Dual Shear Lines

Unlike standard pin tumbler cylinders which feature a single shear line, every SFIC cylinder contains **two distinct shear lines**:

1. **Operating Shear Line:** The boundary between the inner rotating plug and the control sleeve. When all pin stacks align at this plane, the plug rotates, actuating the cam or tailpiece to unlock the door.
2. **Control Shear Line:** The boundary between the control sleeve and the outer cylinder housing. When all pin stacks align at this upper plane, the control sleeve rotates approximately 15 degrees, retracting the exterior control lug into the core body and allowing the entire cylinder to be pulled out of the lock housing.

---

## SFIC Pinning Mathematics (BEST A-2 System)

The **BEST A-2 System** is the most widely deployed SFIC system. It relies on strict mathematical constants across all 6 or 7 pin chambers:

- **System Increment:** .0125" per bitting number (Depths 0–9).
- **Stack Constant:** Every pin chamber stack must total exactly **23** steps (.2875").

```text
Total Stack = Key Pin + Master Pin(s) + Control Pin + Top Driver Pin = 23
```

### Standard Pinning Calculation Procedure

Given an **Operating Key Cut** and a **Control Key Cut** for each chamber:

1. **Key Pin:** Directly equals the Operating Key cut:
   `Key Pin = Operating Cut`
2. **Control Pin:** Calculated from the difference between the Control Cut and Operating Cut:
   - If `Control Cut >= Operating Cut`:
     `Control Pin = Control Cut - Operating Cut`
   - If `Control Cut < Operating Cut` (borrow 10 rule):
     `Control Pin = (Control Cut + 10) - Operating Cut`
3. **Top Driver Pin:** Calculated to make the entire stack equal the constant 23:
   `Driver Pin = 23 - (Key Pin + Control Pin)`

### Example Chamber Calculation (BEST A-2)

Assume Chamber 1 has an Operating Cut of **3** and a Control Cut of **7**:
- Key Pin = **3**
- Control Pin = `7 - 3` = **4**
- Driver Pin = `23 - (3 + 4)` = **16**
- *Verification:* `3 + 4 + 16 = 23`

Assume Chamber 2 has an Operating Cut of **6** and a Control Cut of **2**:
- Key Pin = **6**
- Control Pin = `(2 + 10) - 6` = **6**
- Driver Pin = `23 - (6 + 6)` = **11**
- *Verification:* `6 + 6 + 11 = 23`

---

## Large Format Interchangeable Cores (LFIC)

Large Format Interchangeable Cores are proprietary to individual lock manufacturers. They do not share the universal Best SFIC footprint, and each manufacturer utilizes their standard residential/commercial pin diameters (.115") and unique core retention mechanisms.

| Manufacturer | Core Retention Mechanism | Operating Keyway | Distinguishing Features |
| :--- | :--- | :--- | :--- |
| **Schlage LFIC** | Rear retaining wafer in chamber 6 or 7 actuated by a specialized cut on the tip or shoulder | Classic Obverse (C, E, etc.) or Everest | Figure-8 shape with flat bottom lobe and rear control dog |
| **Corbin Russwin LFIC** | Side-mounted control lug governed by a 6th or 7th pin chamber | System 70 / 59 / 60 Series | Asymmetrical side profile; control key cut operates side blocker |
| **Sargent LFIC** | Side-mounted locking slide bar | Sargent LA, LB, RA series | Core body features a longitudinal slot accommodating the control bar |
| **Yale LFIC** | Dual-lobed cylinder with bottom retention slide | Yale Standard / Para | Retaining lug extends at the bottom rear of the core shell |
| **Medeco LFIC** | High-security rotating pin stack with sidebar locking retention | Medeco Biaxial / m3 | Features angled cuts and a dedicated control sidebar |

---

## Construction Cores & Standard Factory Bittings

During construction, general contractors replace permanent architectural cores with temporary **Construction Cores** to allow trade workers building access without compromising final facility master key security.

Once construction is completed, the site manager inserts the **Construction Control Key**, extracts all temporary cores, and inserts the permanent cores.

Because construction cores are reused across thousands of job sites, standard factory bittings frequently remain active on buildings long after occupancy.

### Schlage Full-Size Construction Cores (Orange or Black)

Utilizes blank 35-101 for operating keys and 35-056 for control keys:

| Core Designation | Operating Key Bitting | Control Key Bitting | Notes |
| :--- | :--- | :--- | :--- |
| **ICA** | `4-3-9-3-8-3` | `4-3-9-3-8-3` (Standard) | High-volume commercial construction series |
| **ICB** | `5-6-8-4-3-8` | `5-6-8-4-3-8` (Standard) | Secondary commercial project series |
| **ICC** | `3-4-7-5-9-4` | `3-4-7-5-9-4` (Standard) | Institutional and corporate construction series |

### Small Format Construction Cores (Green & Brown)

Standard SFIC 7-pin construction cores utilizing 35-310 AB key blanks:

| Series | Operating Key Bitting | Control Key Bitting | Application |
| :--- | :--- | :--- | :--- |
| **Green Series** | `4-7-4-9-6-1-0` | `7-8-1-6-9-4-7` | Widely deployed in universities, clinics, and municipal facilities |
| **Brown Series** | `5-7-6-9-4-3-4` | `8-2-9-4-3-4-3` | Standard commercial contractor series |

---

## Covert Entry & Red Team Vulnerabilities

1. **Shear Line Collision & Jamming:** When picking an SFIC cylinder, pins may independently set to either the operating shear line or the control shear line. If three pins set to operating and four pins set to control, the cylinder completely jams and neither the plug nor the control sleeve can turn. Overcoming this requires disciplined tensioning and feeling for control-specific feedback.
2. **Direct Core Extraction:** Picking an SFIC cylinder directly to the control shear line is often easier than picking to operating because the control sleeve typically binds with distinct tactile feedback. Once the control sleeve rotates 15 degrees, pulling the core out exposes the interior cam mechanism, which can be thrown directly with a screwdriver.
3. **Construction Core Persistence:** Due to administrative oversight or unfinished punch-list items, perimeter doors or mechanical rooms frequently remain pinned to standard construction cores for months or years after handover.

---

## Authoritative References & Engineering Manuals

- [dormakaba BEST A2 System Technical Service Manual (Doc T61803)](https://dhwsupport.dormakaba.com/hc/en-us/articles/201132377-Mechanical-Product-Service-Manuals)  
  The definitive manufacturer service manual for BEST Small Format Interchangeable Cores, covering A-2 system combinating rules, stack height constant 23, and capping methods.
- [dormakaba BEST Core & Key Service Manual (Doc T35527)](https://dhwsupport.dormakaba.com/hc/en-us/articles/201163596-Cores-C-Keys-A-Series)  
  Covers key cutting tolerances, tip-stop alignment, ejector tools, and maintenance of SFIC housings.
- [William M. Lynk: "Removable Cores: Large Format" (ICLS Books)](https://www.iclsglobal.com/IC-BooksPlus.html)  
  The leading technical textbook on Large Format Interchangeable Cores, analyzing retention mechanics across Yale, Corbin Russwin, Medeco, Schlage, Sargent, and Kaba.
- [Allegion Schlage Construction Keying Technical Bulletin](https://us.allegion.com/en/home/service-support/document-library.html)  
  Factory guide detailing temporary construction core keying procedures, operating vs control keys, and turnover procedures for general contractors.

