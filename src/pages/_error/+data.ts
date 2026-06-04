/* eslint-disable react-hooks/rules-of-hooks */

import { useConfig } from "vike-react/useConfig";
import type { PageContextServer } from "vike/types";

export async function data(pageContext: PageContextServer) {
  const is404 = pageContext.is404;

  useConfig()({
    title: is404 ? "404 - Page Not Found | SuperZaa" : "500 - Internal Server Error | SuperZaa",

    description: is404
      ? "The page you are looking for could not be found. It may have been moved, renamed, or deleted."
      : "An unexpected error occurred while loading the page. Please try again later.",
  });

  return {};
}
