import fs from "node:fs";
import path from "node:path";

const entry = "Chief Vibe Officer for Haunted Roombas";
// The competition judges one line of 1-140 characters: fail loudly instead
// of writing a blank or over-long line.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${entry.length}`);
}
const outDir = process.env.OUTPUT_DIR ?? "output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry);
console.log(entry);
