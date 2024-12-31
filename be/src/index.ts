import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3005;

app.use(cors());

// Endpoint to get the ISS location
app.get("/api/iss-location", async (req, res) => {
  try {
    const response = await axios.get("http://api.open-notify.org/iss-now.json");
    const { latitude, longitude } = response.data.iss_position;
    res.json({ latitude, longitude, timestamp: response.data.timestamp });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch ISS location" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
