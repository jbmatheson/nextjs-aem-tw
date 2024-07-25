import { Fragment } from "./Fragment";

interface AEMPageItem {
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  _path: string;
  slug: string;
  title: string;
  navigationTitle: string;
  ogImage: string;
  ogType: string;
  description: {
    html: string;
  };
  components: Fragment[];
}

interface AEMPageList {
  items: AEMPageItem[];
}

export interface AEMResponse {
  pageList: AEMPageList;
}
