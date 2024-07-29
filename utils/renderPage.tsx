import { AEM } from "@/services/AEM";
// Services
import { JsonView } from "@/app/components/JsonView";
import { PageBuilder } from "@/app/components/PageBuilder";

export function renderPage(languageCode: string = "en") {
  return ({ params }: { params: { slug?: string[] } }) => {
    const slug = params.slug == null ? "homepage" : params.slug.join("/");
    console.log("Slug: ", slug);

    return AEM.getPageData(slug, languageCode).then((response) => {
      if (response == null) {
        throw new Error("No response from AEM");
      }

      const items = response.pocPageList.items;
      if (items.length === 0) {
        throw new Error("No items in response from AEM");
      }

      const components = items[0].components;
      if (components == null) {
        throw new Error("No components in response from AEM");
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
