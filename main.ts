// THE WORLD TODAY — Monday 23 November 2026
// Entry for make.fun news-image-20261123 (program/v1, Node 22, standard library only).
//
// The front page is pre-rendered in entry.png beside this file: a broadsheet
// masthead dated MONDAY 23 NOVEMBER 2026, leading with the COP31 collapse in
// Antalya, plus the Hormuz tanker strikes, the Russian warship hit off Libya,
// the boy pulled alive from the rubble in Kyiv, and a footer strip with
// BepiColombo at Mercury, the Indonesia factory fire and Liverpool's win.
// This program copies that image to the output directory. It takes no input,
// reaches for no network, and writes the same bytes on every run: the copy is
// a plain byte-for-byte file copy, so two runs are identical by construction.
// Verified locally with two runs and a sha256 comparison (see README).
//
// Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
