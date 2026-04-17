/// <reference types="astro/client" />

declare module "@pagefind/default-ui" {
  export class PagefindUI {
    constructor(options: {
      element: string;
      bundlePath: string;
      showSubResults?: boolean;
      showImages?: boolean;
      resetStyles?: boolean;
      debounceTimeoutMs?: number;
      mergeFilter?: boolean;
      sort?: (a: unknown, b: unknown) => number;
    });
  }
}
