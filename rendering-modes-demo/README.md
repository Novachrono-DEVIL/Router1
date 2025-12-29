Next.js Rendering Modes

This project demonstrates different rendering modes in Next.js App Router.

Pages and Rendering Types
Page	Route	Rendering Mode
About	/about	Static Rendering (SSG)
Dashboard	/dashboard	Dynamic Rendering (SSR)
Events	/events	Hybrid Rendering (ISR)
Rendering Explanation
Static Rendering (SSG)

Page is generated at build time

Very fast performance

Used for pages that do not change often

Dynamic Rendering (SSR)

Page is generated on every request

Always shows latest data

Used for dashboards or real-time pages

Hybrid Rendering (ISR)

Page is static but updates after a fixed time

Combines speed and fresh data

Used for event or product listings

How to Run the Project
pnpm dev


Open in browser:

http://localhost:3000