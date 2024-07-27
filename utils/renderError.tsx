import { JsonView } from "@/app/components/JsonView";

/* eslint-disable @next/next/no-head-element */
export function renderError(languageCode: string = "en") {
  const Error = ({
    error,
    reset,
  }: {
    error: Error & { digest?: string };
    reset: () => void;
  }) => {
    return (
      <html lang={languageCode}>
        <head>
          <link rel="stylesheet" href="https://use.typekit.net/lpx4pzj.css" />
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body>
          <noscript>You need to enable Javascript to run this app.</noscript>
          <main>
            <JsonView src={error.digest} />
            <div>An error has occurred</div>
          </main>
        </body>
      </html>
    );
  };

  Error.displayName = "Error";
  return Error;
}
