import LZString from "lz-string";

export function compress(data) {
  try {
    return LZString.compressToEncodedURIComponent(JSON.stringify(data));
  } catch {
    // return silently
    return "";
  }
}

export function decompress(str) {
  try {
    const data = JSON.parse(LZString.decompressFromEncodedURIComponent(str));

    return typeof data !== "object" || data === null ? {} : data;
  } catch {
    // return silently
    return {};
  }
}
