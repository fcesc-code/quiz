import TRANSFORMATION_MAP from "./TRANSFORMATION_MAP";

export default function simpleDecoder(string) {
  let result = string
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lsquo;/g, "‘")
    .replace(/&rsquo;/g, "’");

  if (/&/g.test(result)) {
    result = runDecodeMap(result);
  }

  function runDecodeMap(str) {
    const match = `&${str.split("&")[1].split(";")[0]};`;
    const unicodeSeq = TRANSFORMATION_MAP.get(match);
    return str.replace(match, unicodeSeq);
  }

  return result;
}
