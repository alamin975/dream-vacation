import { mkdirSync, writeFileSync } from "node:fs";

// Must stay byte-for-byte: a single emoji, no trailing newline.
const LINE = "🏝️";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
