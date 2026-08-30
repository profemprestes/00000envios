export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  ctaUrl: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}
