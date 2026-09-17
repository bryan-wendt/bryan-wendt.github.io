---
sidebar_position: 3
title: Elevator & Ubiquitous Service Keys
sidebar_label: Service & Elevator Keys
tags: [tools, service-keys, elevators, fire-service, feo-k1, fleet, equipment]
---

# Elevator & Ubiquitous Service Keys

Physical penetration testers, building engineers, and emergency responders encounter standardized key switches across commercial facilities. Standardized keying allows maintenance personnel and first responders unimpeded access to vertical transport systems, mechanical enclosures, and utility equipment without maintaining individual facility key rings.

---

## Elevator Key Switch Functions

Elevator fixtures, call stations, and Car Operating Panels (COP) incorporate specialized key-operated cylinder switches that override normal automated dispatch:

- **Independent Service (IND):** Takes the elevator car out of automated group supervisory control. The car cancels all pending hall calls, travels directly to floors selected inside the cab, and will not open doors automatically upon arrival until the *Door Open* button is actively pressed.
- **Light & Fan:** Controls in-cab secondary ventilation, exhaust fans, and overhead fluorescent/LED lighting circuits.
- **Car Cut-Out (Floor Lockout):** Locks out floor selector buttons or isolates specific secure floors (such as executive suites, data center levels, or penthouse access).
- **Locked Service Cabinet:** Secures the interior COP maintenance swing-panel housing emergency stop switches, inspection mode toggles, programming jacks, and firefighter telephone handsets.
- **Attendant Service:** Transitions the car to manual operator control for freight operations or high-traffic passenger routing.

---

## Ubiquitous Elevator Service Keys (Penetration Testing Reference)

Compiled from field research across commercial high-rise, hospitality, and institutional installations:

### Tier 1: Ubiquitous (Level Five — Top 16 Keys)

These 16 keys represent the vast majority of commercial North American elevator service panels and independent service switches:

| Key Code | Manufacturer / Fixture | Primary Functions | Operating Scope |
| :--- | :--- | :--- | :--- |
| **BGM30** | Otis | Locked Service Panel | Access to internal COP swing-out wiring panels |
| **CH501** | Schindler | Cut-Out & Service Cabinets | Floor lockout, cabinet access |
| **EPCO 1** | EPCO | IND, Light, Fan | Common across commercial retrofits |
| **EX513** | Innovation | IND, Light, Fan | High-volume commercial installations |
| **G1601P** | GAL | IND, Light, Fan | Standard GAL fixture switch |
| **G1612P** | GAL | IND | GAL independent service toggle |
| **G1613P** | GAL | Cut-Out | Floor and car lockout switches |
| **H1848** | Dover | Cut-Out | Dover legacy hydraulic & traction floor cut-out |
| **H2395** | Dover | IND, Light, Fan | Dover standard independent service |
| **KONE 2** | KONE | IND, Light, Fan | KONE standard commercial switch |
| **L203** | ThyssenKrupp | IND, Light, Fan, Locked Panel | Modern ThyssenKrupp / TK Elevator cabs |
| **L206** | ThyssenKrupp | Cut-Out | ThyssenKrupp car call cancel / floor cut-out |
| **MK** | Medeco | Master Switch Key | Factory master key for A-ZZ lock switches |
| **MM101** | Adams | IND, Light, Fan | Standard Adams fixture toggle |
| **UTA** | Otis | IND | Otis standard independent service key |
| **UTC** | Otis | Attendant, Cut-Out | Otis freight and attendant service switches |

### Tier 2: Common (Level Four — 13 Keys)

| Key Code | Manufacturer / Fixture | Functions |
| :--- | :--- | :--- |
| **A40** | Montgomery-KONE | Master key switch (except fire service) |
| **AE102** | Adams | Car cut-out / floor lockout |
| **EX516** | Innovation | Cut-out and security lockouts |
| **H200** | Schindler | Locked service cabinet doors |
| **J200** | Northeast | IND, Light, Fan, Cut-out |
| **J201** | ERM | Accessory service switches |
| **M701** | CJ Anderson | Standard IND, Light, Fan |
| **MAMK** | Adams | Master key for MA series cut-out toggles |
| **MK03** | Montgomery-KONE | IND, Light, Fan switches |
| **OC04** | Schindler | Schindler commercial IND and lighting |
| **UTB** | Otis | Auxiliary toggle (lighting, fan) |
| **UTD** | Otis | Dispatcher signals, priority service |
| **X4001** | MAD | MAD fixture IND, Light, Fan |

---

## Firefighters' Emergency Operation (Fire Service Keys)

Under **ASME A17.1 / CSA B44** elevator safety codes, elevators must provide two distinct phases of emergency fire service:

1. **Phase 1 Emergency Recall:** Triggered by designated keyswitches at the primary lobby floor or by automatic smoke/heat detectors. Recalls all cars non-stop to the ground lobby and parks them with doors open for first responder evacuation.
2. **Phase 2 Emergency In-Car Operation:** Operated via a dedicated key switch inside each elevator cab. Allows firefighters to manually drive the car, open doors under continuous pressure, and bypass all automatic dispatch controls.

### National Standard: FEO-K1

Adopted by the ASME A17.1-2007 code update, the **FEO-K1** key is the mandated national standard fire service key across modern elevator installations in the United States and Canada.

### State & Regional Fire Service Keys

Older installations and jurisdictions with specific state amendments use distinct proprietary or local standard keys:

| Key Code | Jurisdiction / Manufacturer | Blank & Bitting Details | Notes |
| :--- | :--- | :--- | :--- |
| **FEO-K1** | National Standard (ASME A17.1) | Standardized tubular / flat key | Dominant modern standard across North America |
| **Yale 3502** | New Jersey, New Hampshire, Massachusetts | Yale Y2 blank; Bitting: `0-3-2-3-4-8` | Mandated regional fire service key |
| **Yale 2642** | New York City (NYC Standard) | Yale Y1 blank; Bitting: `2-6-4-2-0` | Standard FDNY elevator recall key |
| **Yale 255** | White Plains & Yonkers, NY | Yale Y1 blank; Bitting: `7-3-7-3-0` | Local municipal fire standard |
| **Yale 14398** | Armor Elevator Installations | Yale Y1 blank; Bitting: `1-4-3-9-8` | Armor legacy fire service bitting |
| **Yale 12135** | US Elevator (Square Fixtures) | Yale Y1 blank; Bitting: `1-2-1-3-5` | US Elevator proprietary fire key |
| **AZFS** | State of Arizona | Standard Arizona state fire key | Mandated across Arizona commercial cabs |
| **BFD1** | State of Connecticut | Connecticut state fire service key | Mandated across Connecticut installations |
| **SC1000** | State of South Carolina | South Carolina emergency service key | Mandated across South Carolina elevators |
| **AS100** | Schindler | Schindler standard fire service | Common on Schindler traction cabs |
| **H2252** | Dover | Dover legacy fire service | Hydraulic and commercial installations |
| **H341** | Schindler | Schindler secondary emergency switch | Phase 1 & 2 operation |
| **K3** | KONE | KONE fire service key switch | Standard KONE commercial fire key |
| **L204** | ThyssenKrupp | Thyssen emergency power & fire service | Combined fire and emergency backup toggle |
| **G1617P** | GAL | GAL fire service switch | Widely deployed across GAL elevator fixtures |
| **WD01** | Adams | Adams fire service switch | Standard commercial elevator key |
| **UTF** | Otis | Otis Phase 1 / Phase 2 fire key | Standard Otis commercial fire switch |

---

## Heavy Machinery & Equipment Master Keys

Commercial site perimeters and construction environments frequently rely on equipment fleet keys that are identical across entire manufacturing lines:

| Equipment / System | Standard Key Code | Applications |
| :--- | :--- | :--- |
| **Caterpillar** | **5P8500** | Universal ignition and cab key for Caterpillar heavy equipment and padlocks |
| **John Deere** | **AT195302** | John Deere tractors, excavators, loaders, skid steers |
| **Komatsu** | **787** | Komatsu heavy industrial earthmovers and generators |
| **Case / Bobcat** | **D250** | Bobcat mini-excavators, Case loaders, Ingersoll Rand compressors |
| **Ford / Pollak** | **1107** | Industrial forklifts, yard hostlers, commercial tractors |
| **Club Car / EZ-GO**| **1920 / Standard** | Utility maintenance golf carts and perimeter transport vehicles |

---

## Authoritative Standards & Life Safety References

- [ASME A17.1 / CSA B44 Safety Code for Elevators and Escalators](https://www.asme.org/getmedia/05d3cb98-f573-42f4-b8ad-86a26682091a/a17-1_csa-b44_2019-table-of-contents.pdf)  
  Section 2.27 specifies Firefighters' Emergency Operation (Phase 1 Recall, Phase 2 In-Car Operation) and the national standardization on the FEO-K1 key switch.
- [National Fire Protection Association (NFPA 72: National Fire Alarm and Signaling Code)](https://www.nfpa.org/codes-and-standards/nfpa-72-standard-development/72)  
  Governs elevator recall initiation, smoke detector interface thresholds, and emergency responder override procedures.
- [New York City Fire Code (FC 506 Key Boxes & Citywide Standard Keys)](https://www.nyc.gov/site/fdny/codes/fire-code/fire-code.page)  
  Specifies the mandated Citywide Standard Fire Service key (Yale 2642 bitting) and elevator emergency operation requirements within NYC jurisdiction.
- [Kaba Ilco Heavy Equipment & Fleet Key Blank Reference](https://www.ilco.us/support/resources)  
  Industrial cross-reference directory for heavy machinery, forklift, and fleet ignition key blanks.

