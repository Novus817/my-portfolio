export type HomePage = {
  _id: string;
  title: string;
  intro?: {
    eyebrow?: string;
    heading?: string;
    headingHighlight?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
  };
};
