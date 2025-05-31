import { NextResponse, type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const response = await fetch(
    `https://api.github.com/search/code?per_page=1&q=${encodeURIComponent(
      "starify.komoridevs.icu"
    )}`,
    {
      method: "GET",
      headers: {
        accept: "application/vnd.github.v3+json",
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "content-type": "application/json",
      },
    }
  )

  if (!response.ok) {
    return new NextResponse(await response.text(), {
      status: response.status,
      headers: {
        'cache-control': 'public, max-age=0',
      },
    })
  }

  const json = await response.json()
  return new NextResponse(JSON.stringify({ total_count: json.total_count }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=60, s-maxage=86400, immutable, no-transform',
    },
  })
}
