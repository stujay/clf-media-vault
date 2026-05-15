# Media Vault | Sovereign CDN Manager

A private, high-performance Digital Asset Manager (DAM) built to replace SaaS hosting for internal projects. Interfacing directly with S3 and CloudFront to provide a "Sovereign CDN" for web and email assets.

## Aesthetic: "Quiet Luxury"
- **Theme:** Modern Dark (Zinc/Slate) with high-contrast accents.
- **Typography:** Pure Sans-Serif (`Inter`) for a technical, professional feel.
- **Interactions:** Frosted-glass (backdrop-blur) navigation and smooth state transitions.

## Features
- **Batch Uploading:** Drag and drop multiple files concurrently to S3.
- **Intelligent Filtering:** Top-level categorical tabs (Images, Videos, Docs) with dynamic sub-filtering for specific file extensions.
- **Smart S3 Management:** Move or rename assets directly within the UI (handles S3 Copy/Delete and CloudFront Invalidation).
- **Bulletproof Copying:** Multi-layered clipboard logic (modern API + legacy fallback) ensures one-click URL/HTML copying even over HTTP/IP-based access.
- **CloudFront Integration:** Automatic cache invalidation on every upload, move, or rename.

## Technical Stack
- **Framework:** SvelteKit 5 (Runes)
- **Styling:** Tailwind CSS + PostCSS
- **Icons:** FontAwesome
- **Backend:** AWS SDK v3 (S3 & CloudFront)
- **Authentication:** Uses local AWS profile (`~/.aws/credentials`)

## Deployment & Setup
1. **Install Dependencies:** `npm install`
2. **Environment:** Copy `.env.example` to `.env` and add your `CLOUDFRONT_DIST_ID`.
3. **Run Dev:** `npm run dev -- --host --port 5180`

---
*Built as a Sovereign Media Infrastructure prototype.*
