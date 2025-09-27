# TODO: Add Global Scroll Animations and Transitions

## Steps:

- [x] 1. Edit src/hooks/useScrollReveal.ts: Enhance for slide-in-left/right classes (based on data-slide attr), add stagger support for children (set --index CSS var, delayed reveals).
- [x] 2. Edit src/index.css: Add @keyframes slide-in-left/right, styles for .slide-left/.slide-right (opacity/transform transitions), global button/card transitions (hover scale 1.05, active scale 0.95, glow), stagger delays, reduced-motion support.
- [x] 3. Edit src/components/Hero.tsx: Add 'slide-in-left' to title/subtitle, 'slide-in-right' to buttons/image, stagger text lines with data-stagger-index, hover/click on buttons.
- [x] 4. Edit src/components/About.tsx: Add 'slide-in-left' to profile image, 'slide-in-right' to text/content, slide-in to StackingCards header, active scale on action buttons.
- [x] 5. Edit src/components/Portfolio.tsx: Alternate slide-left/right on stats cards with stagger, slide-in on projects/certificates/tech stack grids (per row stagger), hover/click on tabs/buttons/links.
- [x] 6. Edit src/components/Contact.tsx: Slide-in-left/right on form fields/labels, hover/click transitions on submit button.
- [ ] 7. Edit src/components/Navigation.tsx: Slide-in on menu items (left for desktop, right for mobile), hover underline transition.
- [ ] 8. Test: Run dev server, launch browser, scroll through sections (verify slide-ins, stagger, no conflicts with stacking), interact (click/hover), check responsive/mobile, console errors.
