import { URL } from "node:url";
import { PathLike, createWriteStream } from "node:fs";
import https from "node:https";
import http from "node:http";

const ALLOWED_PROTOCOLS = /http(s|):/;

export default function download(url: URL | string, path: PathLike): Promise<true> {
  if (typeof url === "string") url = new URL(url);
  if (!ALLOWED_PROTOCOLS.test(url.protocol)) throw new Error("Only 'https:' and 'http:' urls allowed!");

  const writeStream = createWriteStream(path, { });

  const httpModule = url.protocol === "https:" ? https : http;
  
  return new Promise<true>((resolve, reject) => {
    httpModule.get(url, (res) => {
      res.pipe(writeStream);
  
      res.on("error", (err) => {
        reject(err);
        writeStream.close();
      });
      writeStream.on("error", (err) => {
        reject(err);
        writeStream.close();
      });
      res.on("end", () => {
        resolve(true);
        writeStream.close();
      });
    });
  });
};