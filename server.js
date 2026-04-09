async function fetchGemini(prompt, retries = 3) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, // ✅ changed model
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
      await new Promise(r => setTimeout(r, 2000));
      return fetchGemini(prompt, retries - 1);
    }

    return data;

  } catch (err) {
    throw err;
  }
}