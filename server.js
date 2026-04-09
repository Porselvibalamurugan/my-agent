import dotenv from "dotenv";
import { createServer } from "http";
import { readFileSync } from "fs";

dotenv.config({ override: true });

async function fetchGemini(prompt, retries = 3) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (data.error && data.error.code === 503 && retries > 0) {
      console.log("Retrying... attempts left:", retries);
      await new Promise((r) => setTimeout(r, 2000));
      return fetchGemini(prompt, retries - 1);
    }

    return data;
  } catch (err) {
    throw err;
  }
}

const server = createServer(async (req, res) => {
  // Serve index.html
  if (req.method === "GET" && req.url === "/") {
    const html = readFileSync("index.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  }

  // Handle /ask POST
  if (req.method === "POST" && req.url === "/ask") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const { prompt } = JSON.parse(body);
        console.log("Question received:", prompt);

        const data = await fetchGemini(prompt);

        if (data.error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: data.error.message }));
          return;
        }

        const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
        console.log("Answer:", answer);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ answer }));
      } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
  console.log("✅ Open your browser at http://localhost:3000");
});