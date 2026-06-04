import ErrorPage from "../../components/pages/Error";
import { usePageContext } from "vike-react/usePageContext";

export function Page() {
  const pageContext = usePageContext();

  const errorTitle =
    typeof pageContext.abortReason === "string"
      ? pageContext.abortReason
      : pageContext.is404
        ? "Page not found."
        : "Something went wrong.";

  const errorMessage =
    typeof pageContext.abortReason === "string"
      ? pageContext.abortReason
      : pageContext.is404
        ? "The requested page could not be found, It may have been moved or deleted."
        : "An unexpected error occurred, please try again later.";

  return (
    <ErrorPage code={pageContext.is404 ? 404 : 500} title={errorTitle} message={errorMessage} />
  );
}
