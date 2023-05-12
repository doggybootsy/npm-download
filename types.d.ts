import type { PathLike } from "node:fs";
import type { URL } from "node:url";

declare function download(url: URL | string, path: PathLike): Promise<true>;

export default download;