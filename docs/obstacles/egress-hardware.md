---
sidebar_position: 2
title: Egress Hardware & Exit Devices
sidebar_label: Egress Devices
tags: [obstacles, egress, crash-bars, panic-bars, lever-handles]
---

# Egress Hardware & Exit Devices

Life safety codes require commercial building exits to permit unimpeded egress from the interior without requiring keys or specialized knowledge. This single-action egress principle creates inherent external manipulation attack surfaces.

---

## Under-Door Tool & Lever Handle Dynamics

![Under-Door Tool Deployment Vector](/img/wiki/obstacles/udt-deployment.svg)
*Figure 1: Cross-section showing Under-Door Tool path under the threshold gap and cable lasso depression of interior lever handle. Source & Reference: [Physical Penetration Testing Guidelines & Deviant Ollam Research](/docs/resources/references).*

On doors equipped with interior lever handles:

1. The semi-rigid wire base slides beneath the undercut gap (3/8" to 3/4").
2. The operator aligns the cable loop over the lever handle from the outside.
3. Pulling the cable depresses the lever, releasing the latch bolt and opening the door without physical damage.

---

## Exit Device Classifications

- **Crash Bars / Touch Bars:** Horizontal push bars across the width of the door that retract the latch upon pressure.
- **Push Paddles:** Wall-mounted or door-mounted paddle switches that mechanically or electrically trigger latch retraction.
- **Commercial Lever Handles:** Free-turning or clutch-style exterior levers connected to interior single-motion egress handles.

---

## Attack Surfaces

### 1. Gap Manipulation of Crash Bars
On double doors with a gap between meeting stiles, a rigid or flexible curved wire can reach through the center seam and hook the touch bar, depressing it from the outside.

### 2. Under-Door Handle Depress
On doors equipped with interior lever handles, an [Under-Door Tool (UDT)](/docs/tools/bypass-tools) can slide beneath the door undercut, lasso the lever handle, and pull downward to release the latch bolt.

---

## Applicable Bypasses & Tools

- [Bypass Techniques Matrix](/docs/techniques/bypass-methods)
- [Under-Door Tool Equipment](/docs/tools/bypass-tools)
- [Field Identification Overview](/docs/identification/overview)

---

## Defensive Countermeasures

- Installing overlapping full-length astragals and interlock plates between double doors.
- Retrofitting handles with anti-UDT drop shields or angled deflection plates.
- Specifying motorized delayed egress devices where building code allows.
