import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#fff",
          fontSize: 128,
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
