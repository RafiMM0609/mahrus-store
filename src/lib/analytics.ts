"use client";

export type AnalyticsEvent = {
  name: string;
  data?: Record<string, unknown>;
};

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  console.info("[analytics]", event.name, {
    ...event.data,
    at: new Date().toISOString(),
  });
}
