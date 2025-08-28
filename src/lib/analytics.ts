export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
export const ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID || "";
export const ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL || "";

export function gtag(...args: any[]) {
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push(arguments);
  }
}
