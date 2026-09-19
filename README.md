# Brown Formula Racing website

React + Vite site for Brown Formula Racing, deployed on Vercel.

```
npm install
npm run dev     # local dev server
npm run build   # production build into dist/
npm run lint
```

- pages live in `src/pages`, shared pieces in `src/components`
- images go in `src/assets/images`. keep photos under ~500 KB (about 2000px on the long edge, headshots ~1000px)
- headshots: drop the file in `team/headshots` and set `file` on the person in `Team.jsx`
- cars: name the photo `brown-fsae-<year>-car.jpg` and add the car to the list in `Cars.jsx`
- sponsor logos: drop the file in `sponsors/sponsor-logos`, it shows up automatically
