# Design Validation Checklist — Team Page & Login/Sign-Up Styling
**Role:** BA — Imraan Mohammed
**Date:** Thu, 13 Aug 2026
**Checked Against:** requirements.md (Tue, 11 Aug 2026)
**Design Reviewed — Figma Design by UX Max Thum:** [\[Figma Link\]](https://www.figma.com/design/rQsI22gA2Wd3i9XzZdVtaH/Apple-HAPI-UI-UX-design?node-id=204-65&t=p1yeDgYieKRbGXWR-1)

## Team Page

- [x] Welcome message "Meet Our Team" present, H3
- [ ] _Optional:_ Team/Project Name "HAPI Apple Platform Showcase — Team A" present, H3
- [x] "5 Members" short team detail line present, H3
- [x] All 5 member cards present, each with photo, name, role, blurb
- [x] Cards use container card layout
- [x] Edge Case #1 — placeholder avatar shown for members without a photo
- [ ] _Optional:_ <span style="color:grey;font-style:italic">Edge Case #2 — read-more/expand accordion shown for blurbs over 20 words, short blurbs display in full without breaking layout</span>
- [x] Edge Case #3 — no new logic applied, just confirming design assumes an already-authenticated view (nothing new to build for devs)

## Login & Sign-Up Pages

- [x] Login page styled: dark theme, blue accents, centred layout
- [x] Sign-Up page styled to match Login page with same theme/layout
- [x] No new fields or logic introduced that would otherwise be out of scope
- [x] _Optional:_ <span style="color:grey;font-style:italic"> Edge Case #4 — invalid login/sign-up error state with same logic, no new design required for error handling</span>

## Final Checks

- [x] Major Gaps (if any) sent back to UX to resolve — None found, therefore All Major Requirements Met
- [x] Document Updated
- [x] UX Design Approved by BA

## Gaps Found (if any)
- [x] None

## Deliverable
- This document will be Committed under the filename "design-validation.md"to the following repo's "requirements" branch with a Pull-Request following suit to the "main" branch: 
    - https://github.com/s4094165/garage-boilerplate-basic/blob/requirements/docs/

## Sign-Off: Notes for Next Roles (Devs)
**Thu, 13 Aug 2026:** Major Requirements Met in Figma File, Validation Document Updated, UX Design Approved by BA — Imraan Mohammed
- Dev 1, Nick Moore, Dev 2, Max Ivanovic — You've been cleared to start development based off the Figma file designed by UX, no further concerns from BA's side.