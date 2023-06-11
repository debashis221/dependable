import { onboarding1, onboarding2 } from "./images";

export interface Slide {
  key: string;
  title: string;
  text: string;
  image: any;
}
export const slides: Slide[] = [
  {
    key: "slide1",
    title: "Find Your Dream jobs",
    text: "Lorem Ipsum is simply dummy text of the printing andindustry's standard dummy text.",
    image: onboarding1,
  },
  {
    key: "slide2",
    title: "Join And Start Your work",
    text: "Lorem Ipsum is simply dummy text of the printing andindustry's standard dummy text.",
    image: onboarding2,
  },
];
