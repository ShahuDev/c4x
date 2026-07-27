# C4X AAC Blocks & Adhesive — Website

Urgent-scope build: **About Us, Products (AAC Blocks & Adhesive), Plant Photos, Contact Us.**
Certificates/Projects, FAQs, and the Quote Calculator are intentionally left for phase 2.

## What's in here

```
preview/          A single self-contained HTML file — open it directly in a
                  browser to see the design with no build step. Use this to
                  sign off on the look before the dev build.

app/backend/      Spring Boot API (Java 17, Maven)
app/frontend/     Angular 18 app (standalone components)
```

## Before you go live, add these

1. **Plant walkthrough video** — `app/frontend/src/assets/video/plant-walkthrough.mp4`,
   then set `hasVideo = true` in `hero.component.ts`. It will autoplay only while
   the hero section is scrolled into view, and pause otherwise.
2. **Plant photos** — drop files into `app/frontend/src/assets/images/plant/`
   and set the `src` field for each entry in `gallery.component.ts`.
3. **Brochure PDF** — `app/backend/src/main/resources/static/brochure/c4x-brochure.pdf`.
   The "Download Brochure" button already points at `/api/brochure`.
4. **Company address & map** — the address line and the Google Maps embed are
   placeholders in `contact.component.ts` (`mapEmbedUrl`) until the brochure's
   address/coordinates are available. Once you have lat/long, set:
   ```ts
   readonly mapEmbedUrl = 'https://www.google.com/maps?q=<lat>,<lng>&output=embed';
   ```

## Running locally

**Backend** (needs Java 17 + Maven, and internet access to fetch dependencies once):
```
cd app/backend
mvn spring-boot:run
```
Runs on http://localhost:8080. Enquiries submitted via the contact form are logged;
set `c4x.mail.enabled=true` in `application.properties` (with real SMTP credentials)
to also forward them by email.

**Frontend** (needs Node.js 18+ and the Angular CLI):
```
cd app/frontend
npm install
npm start
```
Runs on http://localhost:4200 and proxies nothing by default — for local API
calls to work, either run both and set the dev-server proxy, or just build the
frontend into the backend's static folder (see below) and test against :8080.

## Building for production / hosting

```
cd app/frontend
npm run build
# copy the output into the backend so one server serves everything:
cp -r dist/c4x-aac-website/browser/* ../backend/src/main/resources/static/

cd ../backend
mvn clean package
java -jar target/website-1.0.0.jar
```
This gives you a single deployable JAR serving both the site and the `/api/*`
endpoints — the simplest thing to point a VPS or a Java-friendly host (Render,
Railway, an EC2/Lightsail box, etc.) at for the "urgent" launch.

## Phase 2 (not built yet, on purpose)

- Certificates & Projects/Clients section
- FAQs section
- Quote calculator (collects a mobile number, then shows the result and
  raises an enquiry)
