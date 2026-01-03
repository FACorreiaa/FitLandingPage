export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}

export interface MicroserviceItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface TechItem {
  title: string;
  icon: string;
}

export interface RoadmapPhase {
  title: string;
  status: 'complete' | 'current' | 'upcoming';
  items: Array<{
    text: string;
    done: boolean;
  }>;
}
