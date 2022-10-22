import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          fontStyle: "normal",
          letterSpacing: "-0.025em",
          color: "white",
          marginTop: 30,
          padding: "0 120px",
          lineHeight: 1.4,
          whiteSpace: "pre-wrap",
          //   display: "flex",
          //   width: "100%",
          //   height: "100%",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   textAlign: "center",
          //   backgroundColor: "#fff",
          //   fontSize: 128,
        }}
      >
        <h1>Demo for CityJS</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
