import ReactDOM from "react-dom/client";

export async function onRenderClient(pageContext: {
  Page: React.ComponentType;
}) {
  const { Page } = pageContext;

  ReactDOM.hydrateRoot(
    document.getElementById("root")!,
    <Page />
  );
}