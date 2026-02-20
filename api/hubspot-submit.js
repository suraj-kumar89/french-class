export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

     if (req.body.website) {
    return res.status(400).json({ error: "Bot detected" });
  }
    // Get client IP address
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "";

    // Clone incoming payload
    const payload = req.body || {};

    // Ensure context exists
    payload.context = payload.context || {};

    // Add IP address for HubSpot spam protection
    payload.context.ipAddress = ip;

    const response = await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/245021836/b2cfa0dc-0f9c-48da-be2f-563620025a39",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("HubSpot error:", data);
      return res.status(400).json(data);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}