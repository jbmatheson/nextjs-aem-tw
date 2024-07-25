import { AEMResponse } from "@/models/AEM";

class Singleton {
  public getPageData(slug: string, locale: string = "en") {
    const persistedQuery = `getPageByPath;_path=/content/dam/content-fragment/sites/${process.env.REACT_APP_AEM_PROJECT}/${locale}/pages/${slug}`;

    return AEM.runPersistedQuery(persistedQuery);
  }

  public runPersistedQuery(persistedQuery: string): Promise<AEMResponse> {
    // TODO - Need to iron out what this URL is supposed to be
    return fetch(
      `${process.env.REACT_APP_AEM_URL}${process.env.REACT_APP_AEM_GRAPHQL_ENDPOINT}`,
      {
        method: "GET",
        next: { revalidate: 60 },
        headers: {
          "Ocp-Apim-Subscription-Key":
            process.env.REACT_APP_AEM_SUBSCRIPTION_KEY,
          pq: persistedQuery,
          folder: process.env.REACT_APP_AEM_PROJECT,
          "Content-Type": "application/json",
          Accept: "application/json",
        } as HeadersInit,
      }
    )
      .then((res) => res.json())
      .then((json) => json.data)
      .catch((error) => {
        console.error("Error fetching data from AEM", error);
      });
  }
}

export const AEM = new Singleton();
