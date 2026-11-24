import fs from "node:fs";
import path from "node:path";

const entry = "Chief Vibe Officer for Haunted Roombas";
const outDir = process.env.OUTPUT_DIR ?? "output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry);
console.log(entry);
