import type { JSX } from "react";
import type { Pattern } from "../content/config";

export default function PatternCard({ pattern }: Pattern): JSX.Element {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{pattern.data.title}</h2>
      <p className="text-gray-600">{pattern.data.designer}</p>

      <div className="mt-2">
        {pattern.data.lineArt && (
          <img
            src={`/api/file/${pattern.data.folder}/${pattern.data.lineArt}`}
            alt={`${pattern.data.title} technical drawing`}
            width="200"
          />
        )}
        {pattern.data.samples.length > 0 && (
          <img
            src={`/api/file/${pattern.data.folder}/${pattern.data.samples[0]}`}
            alt={`${pattern.data.title} example`}
            width="200"
          />
        )}
      </div>
      <a
        href={`/patterns/${pattern.slug}`}
        className="block border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
      >
        Link
      </a>
    </div>
  );
}
