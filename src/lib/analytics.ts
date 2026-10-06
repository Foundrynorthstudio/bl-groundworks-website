export type AnalyticsConfig = {
  gaId: string;
  gsc: string;
};

export function analyticsConfig(): AnalyticsConfig {
  return {
    gaId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID?.trim() ?? '',
    gsc: import.meta.env.PUBLIC_GSC_VERIFICATION?.trim() ?? '',
  };
}

export function analyticsEnabled(config: AnalyticsConfig) {
  return Boolean(config.gaId);
}
