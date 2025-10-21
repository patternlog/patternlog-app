import fs from "fs";
import path from "path";
import { Readable } from "node:stream";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ params, cookies }) => {
  const auth = cookies.get("auth")?.value;
  if (auth !== process.env.AUTH_PASSWORD) {
    return new Response("Unauthorized", { status: 401 });
  }

  const segments = Array.isArray(params.path) ? params.path : params.path ? [params.path] : [];
  if (segments.length === 0) return new Response("Bad request", { status: 400 });

  const filePath = path.join(process.cwd(), "private-assets", ...segments);
  if (!fs.existsSync(filePath)) return new Response("Not found", { status: 404 });

  const fileStat = fs.statSync(filePath);
  const stream = fs.createReadStream(filePath);

  // Convert to a DOM-compatible ReadableStream type
  const readableStream: globalThis.ReadableStream = Readable.toWeb(stream) as unknown as globalThis.ReadableStream;

  const ext = path.extname(filePath).toLowerCase();
  const contentType =
    {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".webp": "image/webp",
      ".svg": "image/svg+xml",
      ".pdf": "application/pdf",
    }[ext] || "application/octet-stream";

  return new Response(readableStream, {
    headers: {
      "Content-Length": fileStat.size.toString(),
      "Content-Type": contentType,
      "Content-Disposition": `inline; filename="${path.basename(filePath)}"`,
    },
  });
};
