import ErrorPage from "../../components/pages/Error";

export function Page(pageContext: {
  abortReason?: unknown;
  is404?: boolean;
}) {
  const errorMessage =
    typeof pageContext.abortReason === "string"
      ? pageContext.abortReason
      : pageContext.is404
      ? "Page not found."
      : "Something went wrong.";

  return (
    <ErrorPage
      code={pageContext.is404 ? 404 : 500}
      title={errorMessage}
      message={errorMessage}
    />
  );
}