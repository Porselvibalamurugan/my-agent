import { query } from "gitclaw";
import dotenv from "dotenv";
dotenv.config({ override: true });

async function main() {
  console.log("Starting agent...");
  try {
    for await (const msg of query({
      prompt: "Hello! What can you do?",
      dir: "./",
      model: "google:gemini-2.5-flash",
      apiKey: process.env.GEMINI_API_KEY, // explicitly pass the key
    })) {
      if (msg.type === "delta") process.stdout.write(msg.content);
      if (msg.type === "assistant") console.log("\n\nDone.");
      if (msg.type === "system") console.log("System:", msg.content);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();