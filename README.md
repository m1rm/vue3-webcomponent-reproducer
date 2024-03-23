# Vue + Vite + Pinia Webcomponent Showcases
This project showcases the usage of webcomponents generated from Vue3
components using Vue's defineCustomElement function.

After setup and starting the local dev server, you will see three times two colored 
divs with a button. The button gets the displayed value from a pinia store and alters
it via a store action (+1 per click).

Only the last two pairs of components have a separated state, which is achieved by passing a
unique ID to the store upon instantiation in the vue component (separateStoresTestButton.vue).
Using Vue's provide/inject method might be the preferable one since it avoids prop drilling.

## Setup
- Run `npm install` to install dependencies
- Run `npm run dev` to start the local dev server and see the examples in action