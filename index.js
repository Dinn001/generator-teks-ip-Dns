import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {
    if (!message.trim()) {
      alert("Harap masukkan teks terlebih dahulu!");
      return;
    }

    setLoading(true);

    const apiUrl = `https://brat.siputzx.my.id/iphone-quoted?time=11%3A26&messageText=${encodeURIComponent(
      message
    )}&carrierName=INDOSAT%20OOREDOO&batteryPercentage=88&signalStrength=4&emojiStyle=apple`;

    setTimeout(() => {
      setResult(apiUrl);
      setLoading(false);
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#eee",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.3rem",
          background: "linear-gradient(90deg, #1e90ff, #00aaff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 15px #0077ff",
        }}
      >
        iPhone Quoted Generator
      </h1>

      <div
        style={{
          background: "rgba(25,25,25,0.95)",
          padding: "25px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
          boxShadow: "0 0 25px rgba(0,119,255,0.3)",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis kata-kata kamu... ✨"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "2px solid #1e90ff",
            marginBottom: "15px",
            background: "#111",
            color: "#eee",
            outline: "none",
          }}
        />

        <button
          onClick={generateImage}
          style={{
            background: "linear-gradient(90deg, #1e90ff, #00aaff)",
            border: "none",
            padding: "12px 25px",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#111",
          }}
        >
          🚀 Kirim
        </button>

        <div style={{ marginTop: "20px" }}>
          {loading && <p>⏳ Sedang memproses...</p>}
          {result && (
            <>
              <p>Hasil:</p>
              <img
                src={result}
                alt="Generated Quote"
                style={{
                  maxWidth: "100%",
                  borderRadius: "15px",
                  border: "2px solid #1e90ff",
                  marginTop: "10px",
                }}
              />
              <br />
              <a
                href={`/api/download?url=${encodeURIComponent(result)}`}
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  background: "linear-gradient(90deg, #00aaff, #1e90ff)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                ⬇️ Download
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}<body>
  <h1>iPhone Quoted Generator</h1>
  <div class="container">
    <input type="text" id="message" placeholder="Tulis kata-kata kamu... ✨">
    <button onclick="generateImage()">🚀 Kirim</button>

    <div class="result" id="result"></div>
  </div>

  <script>
    function generateImage() {
      const message = document.getElementById("message").value.trim();
      const resultDiv = document.getElementById("result");

      if (!message) {
        alert("Harap masukkan teks terlebih dahulu!");
        return;
      }

      resultDiv.innerHTML = '<div class="loader"></div><p>Sedang memproses...</p>';

      const apiUrl = `https://brat.siputzx.my.id/iphone-quoted?time=11%3A26&messageText=${encodeURIComponent(message)}&carrierName=INDOSAT%20OOREDOO&batteryPercentage=88&signalStrength=4&emojiStyle=apple`;

      setTimeout(() => {
        resultDiv.innerHTML = `
          <p>Hasil:</p>
          <img src="${apiUrl}" alt="Generated Image">
          <br>
          <a class="download-btn" href="/api/download?url=${encodeURIComponent(apiUrl)}">⬇️ Download</a>
        `;
      }, 800);
    }
  </script>
</body>
</html>
