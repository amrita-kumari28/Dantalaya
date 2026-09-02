import { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dantalaya.in";

  return [
    {
      url: base,
    },

    {
      url: `${base}/services`,
    },

    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
    })),
  ];
}