# Date invite 🌸

React + Vite + Tailwind CSS. Three screens: invitation → pick a day/time → confirmation.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

**Your pug photo:** put an image at `public/pug.jpg` (it is shown as the 120×120 rounded picture).
Without it, a small SVG pug is used.

Structure: `App` (step state, transitions) · `HeartBackground` · `DateInvitation` · `DatePicker` · `Confirmation`.
Date and time are kept in localStorage.
