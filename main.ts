import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent renamed all 47 files 'final_final_v2_REAL', then asked me which one was final.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
