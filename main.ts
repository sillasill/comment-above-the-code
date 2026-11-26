import { mkdirSync, writeFileSync } from "node:fs";

// The laugh comes from the confession, not the fix: a timing hack that hides a race condition, now defended as house policy.
const line = "// I added a 300ms sleep and the bug went away, so the sleep stays and nobody is allowed to ask why.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
