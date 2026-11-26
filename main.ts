// Entry program for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X".
//
// The post on X is the entry itself: this program only hands the house its
// address. It copies POST.json from the repository root into /output/POST.json
// and stops with an error when POST.json does not name a real X post, so the
// placeholder can never be submitted by accident.
//
// Run it locally like this:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_URL = /^https:\/\/(x\.com|twitter\.com)\/\w+\/status\/\d+$/;

mkdirSync(OUTPUT_DIR, { recursive: true });

const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');
copyFileSync(src, dst);

const post = JSON.parse(readFileSync(dst, 'utf8')) as { url?: unknown };
if (typeof post.url !== 'string' || !POST_URL.test(post.url)) {
  console.error(`POST.json must name an X post address, got: ${JSON.stringify(post.url)}`);
  process.exit(1);
}

console.log(`Entry post: ${post.url}`);
