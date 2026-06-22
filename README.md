# Media Vault | Sovereign CDN Manager

A private, local-first Digital Asset Manager (DAM) built with SvelteKit 5 (Runes). It replaces SaaS-based media hosting (like Moosend) with a self-managed S3 + CloudFront pipeline.

## Features
- **Asset Browser:** Real-time S3 bucket listing with thumbnail previews.
- **Sovereign CDN:** All public traffic routes through `media.crackinglanguage.com`.
- **One-Click Delivery:** Direct copy buttons for public URLs and pre-formatted HTML snippet for email templates.
- **Drag & Drop:** Multi-file batch uploads to S3 with automatic CloudFront invalidation.

## Technical Architecture
- **Storage:** AWS S3 (`cracking-language-media`)
- **Distribution:** Amazon CloudFront (`media.crackinglanguage.com`)
- **Backend:** SvelteKit Server Actions using `@aws-sdk/client-s3` and `@aws-sdk/client-cloudfront`.
- **Auth:** Local AWS SDK credentials profile (ensure `~/.aws/credentials` is populated).

## Usage
1. **Browse:** Filter by prefix (e.g., `mailers/`) to isolate assets.
2. **Upload:** Drag assets into the drop zone; define a prefix to auto-organize.
3. **Delivery:** Click "Copy URL" for raw assets or "Copy Email HTML" to inject into your newsletters.

## Security & Protocol
- **No Raw S3 URLs:** The application exclusively exposes CloudFront distributions to prevent internal bucket path leakage.
- **Auto-Invalidation:** CloudFront invalidations are triggered automatically on all `upload` and `rename` operations.
