import React from "react";
import { ASSET_URL } from "../config";

const fallbackImage = "/book-cover-placeholder.svg";

const PALETTE = [
  ["#7f1d1d", "#dc2626"],
  ["#1e3a8a", "#3b82f6"],
  ["#14532d", "#22c55e"],
  ["#581c87", "#a855f7"],
  ["#7c2d12", "#f97316"],
  ["#134e4a", "#14b8a6"],
  ["#831843", "#ec4899"],
  ["#1f2937", "#6b7280"],
];

const escapeXml = (text) =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const hash = (text) => {
  let value = 0;
  for (let i = 0; i < text.length; i += 1) {
    value = (value * 31 + text.charCodeAt(i)) >>> 0;
  }
  return value;
};

// Break a title into short lines that fit on the cover.
const wrap = (text, maxChars, maxLines) => {
  const lines = [];
  let line = "";
  String(text)
    .split(/\s+/)
    .filter(Boolean)
    .forEach((word) => {
      if (line && `${line} ${word}`.length > maxChars) {
        lines.push(line);
        line = word;
      } else {
        line = line ? `${line} ${word}` : word;
      }
    });
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = `${kept[maxLines - 1].slice(0, maxChars - 1)}…`;
    return kept;
  }
  return lines;
};

export function generatedCover(title, author) {
  const name = title || "Untitled";
  const [dark, light] = PALETTE[hash(name) % PALETTE.length];
  const titleLines = wrap(name, 14, 5);
  const authorLines = author ? wrap(author, 20, 2) : [];

  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="100" y="${105 + i * 26}" text-anchor="middle" font-family="Georgia, serif" font-size="21" font-weight="bold" fill="#ffffff">${escapeXml(line)}</text>`
    )
    .join("");
  const authorSvg = authorLines
    .map(
      (line, i) =>
        `<text x="100" y="${255 + i * 16}" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#ffffff" fill-opacity="0.85">${escapeXml(line)}</text>`
    )
    .join("");

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 200 300">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${dark}"/><stop offset="1" stop-color="${light}"/></linearGradient></defs>` +
    `<rect width="200" height="300" fill="url(#g)"/>` +
    `<rect x="0" y="0" width="12" height="300" fill="#000000" fill-opacity="0.18"/>` +
    `<rect x="26" y="40" width="148" height="2" fill="#ffffff" fill-opacity="0.6"/>` +
    `<rect x="26" y="228" width="148" height="2" fill="#ffffff" fill-opacity="0.6"/>` +
    titleSvg +
    authorSvg +
    `</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const isUsable = (src) => src && src !== fallbackImage;

export default function BookCover({ src, alt = "Book cover", title, author, ...props }) {
  const fallback = title ? generatedCover(title, author) : fallbackImage;

  let imageUrl = fallback;
  if (isUsable(src)) {
    imageUrl = src.startsWith("/uploads/") ? `${ASSET_URL}${src}` : src;
  }

  return (
    <img
      {...props}
      src={imageUrl}
      alt={alt}
      onError={(event) => {
        // The image file is missing or unreachable: show the generated cover instead of a broken icon.
        if (event.currentTarget.dataset.fallbackApplied !== "true") {
          event.currentTarget.dataset.fallbackApplied = "true";
          event.currentTarget.src = fallback;
        }
      }}
    />
  );
}
