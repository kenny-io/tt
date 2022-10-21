import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  // get username from request URL
  const reqURL = new URL(req.url);
  const username = reqURL.searchParams.get("username");
  if (!username) {
    return new Response("Username is required");
  }
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
        <section tw="text-gray-600 body-font">
          <div tw="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              tw="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={`https://github.com/${username}.png`}
            />
            <div tw="text-center lg:w-2/3 w-full">
              <h1 tw="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Microdosing synth tattooed vexillologist
              </h1>
              <p tw="mb-8 leading-relaxed">
                Meggings kinfolk echo park stumptown DIY, kale chips beard
                jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
                godard disrupt ramps hexagon mustache umami snackwave tilde
                chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui
                celiac mlkshk freegan photo booth af fingerstache pitchfork.
              </p>
              <div tw="flex justify-center">
                <button tw="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button tw="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
