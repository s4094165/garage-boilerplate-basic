# Requirements — Team Page & Login Styling
**Role:** BA — Imraan MOHAMMED
**Date:** Tue, 11 Aug 2026

## #1 Team Page: Scope

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

**Edge Cases (Team Page):**

- **Edge Case #1 → Missing Photo:** if any member listed has no photo, show a placeholder avatar instead of a broken image.

- **Edge Case #2 → Long Blurbs:** if a member's blurb goes beyond 20 words "short" limit, treat it as "long". UX should design a "read more" to expand accordion button so the user full blurb becomes readable, while the default "short" state keeps the card layout's vertical symmetry intact. 

- **Edge Case #3 → Team Page Access Without Login:** if an ordinary user attempts to access the team page without first signing in, the original redirect logic must not be changed, only the frontend design and creation of the team page must be updated to match the new theme. Reminder, no new logic here, but simply an edge case to be aware of ensuring only users  already logged in with an active session may access the team page. (flagged by both Dev 1, Nick Moore and Dev 2, Max Ivanovic)

## #2 Login & Sign-Up Pages: Scope

**Field/Display Rules (Scope):**
- Restyling is **Visual Only** to both Login and Sign-Up pages: 
    - Colours: Dark theme with Blue accents
    - Layout: Centred Layout
    - Sign-Up page requires similar styling to Login page (flagged by Dev 2, Max Ivanovic)
- **Outside of Scope:** Login and Sign-Up page logic must remain unaffected by the frontend redesign. Keep unchanged from the boilerplate:
    - Authorisation Logic, Validation & Redirecting Behaviour (flagged by both Dev 1, Nick Moore and Dev 2, Max Ivanovic)

**Edge Cases (Login & Sign-Up Page):**
    
- **Edge Case #4 → Invalid Login/Sign-Up Attempt:** if a user enters the wrong password for logging in or a previously used email for singin up, the existing error logic must not be changed, only restyle to match the new theme.

## #3 Deliverable
- This document will be Committed under the filename "requirements.md" to the following repo's "requirements" branch with a Pull-Request following suit to the "main" branch: 
    - https://github.com/s4094165/garage-boilerplate-basic/blob/requirements/docs/
- This document will be Shared with: 
    - _PM & UX_

## #4 Note for Next Role (UX)
- We have 5 Members total, and as images are not available for the moment, use placeholder avatars for now (#1 Team Page → Edge Case #1).
- Blurb maximum word count is 20 for default "short" state (#1 Team Page → Edge Case #2).
- Both Login and Sign-Up pages require **styling only**, with the same dark theme, blue accents, centred layout as the original updates made to the Login page (#2 Login & Sign-Up Pages).
