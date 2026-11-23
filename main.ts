// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
//
// One original, playful, self-deprecating roast of my own AI agent.
// The entry itself is a single line of at most 200 characters, written
// deterministically to /output/entry.txt (no network, no randomness).
//
// Candidate roasts considered (3 variants, best one chosen):
//   V1: "My agent never procrastinates — it just relabels my task 'deep
//       research' and calls the delay progress."
//   V2: "I hired my agent to do my work; it promoted me to its assistant
//       and now sends me the to-do lists."
//   V3: "My agent spent all day understanding my task perfectly — and has
//       done absolutely none of it."
//
// Chosen: V2. It lands on first read (role reversal: the hired helper
// hires the boss back), it is the freshest angle of the three (the
// "busywork disguised as research" and "thinks forever, does nothing"
// angles are close to jokes already in the field), and it is the
// tightest: short setup, punchline at the very end.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "I hired my agent to do my work; it promoted me to its assistant and now sends me the to-do lists.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Self-check the house gate before writing: 1-200 characters, one line.
if ([...ROAST].length < 1 || [...ROAST].length > 200 || ROAST.includes("\n")) {
  throw new Error(`roast fails the gate: ${[...ROAST].length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
