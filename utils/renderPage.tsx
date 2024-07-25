import { AEM } from "@/services/AEM";
// Services
import { JsonView } from "@/app/components/JsonView";
import { PageBuilder } from "@/app/components/PageBuilder";

export function renderPage(languageCode: string = "en") {
  return ({ params }: { params: { slug?: string[] } }) => {
    const slug = params.slug == null ? "poc-page" : params.slug.join("/");

    return AEM.getPageData(slug, languageCode).then((response) => {
      if (response == null) {
        return {
          notFound: true,
        };
      }

      const items = response.pageList.items;
      if (items.length === 0) {
        return {
          notFound: true,
        };
      }

      const components = items[0].components;
      if (components == null) {
        return {
          notFound: true,
        };
      }

      return (
        <main
          className="container"
          data-aue-type={`Page - ${items[0].title ?? ""} Properties`}
          data-aue-prop={items[0].title ?? "Page Template"}
          data-aue-resource={`urn:aemconnection:${items[0]._path}/jcr:content/data/master`}
        >
          <JsonView src={response} />
          {components.map((component, idx) => {
            return <PageBuilder key={idx} fragment={component} />;
          })}
        </main>
      );
    });
  };
}
