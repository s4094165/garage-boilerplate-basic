# Requirements — Team Page & Login Styling
**Role:** BA — Imraan MOHAMMED
**Date:** Tue, 11 Aug 2026

## #1 Team Page

**Field/Display Rules (Scope):**
- Welcome Message: **Meet Our Team**, Required in single line, use H3
- Team/Project Name: **HAPI Apple Platform Showcase — Team A**, Required in single line, use H3
- Short High-Level Team Details: **This Team has 5 Members: _PM, BA, UX, Dev 1, Dev 2_**, Required in single line, use H3
- Each Member Details: 
    - **Attributes Include → Photo, Name, Role, Short Blurb (1-3 Sentences Short "About Me")**
    - Required in Container Card Layout
    - Long Name/Role default behaviour is to continue to the next line
    - **Blurb Length Rule:** Short means up to 20 words. Beyond that, treat blurb as long and trigger the "read more" to expand accordion button (Edge Case #2).

| Member | Role | Photo | Blurb |
|---|---|---|---|
| Nirmal Rajesh | PM | [🗣️] | Short / Long |
| Imraan Mohammed  | BA | [🗣️] | Short / Long |
| Max Thum | UX | [🗣️] | Short / Long |
| Nick Moore  | Dev 1 | [🗣️] | Short / Long |
| Max Ivanovic | Dev 2 | [🗣️] | Short / Long |

**Edge Cases:**

- **Edge Case #1 → Missing Photo:** if any member listed has no photo, show a placeholder avatar instead of a broken image.

- **Edge Case #2 → Long Blurbs:** if a member's blurb goes beyond 20 words "short" limit, treat it as "long". UX should design a "read more" to expand accordion button so the user full blurb becomes readable, while the default "short" state keeps the card layout's vertical symmetry intact. 

## #2 Login Page: Scope

**Field/Display Rules (Scope):**
- Restyling is **Visual Styling Only**: 
    - Colours: Dark theme with Blue accents,
    - Layout: Centred Layout, 
- **Outside of Scope:** Keep Unchanged from the Boilerplate.
    - Authorisation Logic, Validation & Redirecting

## #3 Deliverable
- This document will be Committed to: 
    - https://github.com/s4094165/garage-boilerplate-basic/tree/team-page/docs
- This document will be Shared with: 
    - _PM & UX_

## #4 Note for Next Role (UX)
- We have 5 Members total, and as images are not available for the moment, use placeholder avatars for now (#1 Team Page → Edge Case #1).
- Blurb maximum word count is 20 for default "short" state (#1 Team Page → Edge Case #2).
- Login is **styling only**, with dark theme and blue accents, centred layout and nothing further else to design around.
