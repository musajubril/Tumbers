export interface State {
  first_name: string;
  last_name: string;
  spouse_first_name: string;
  spouse_last_name: string;
  wedding_date: Date|null;
  wedding_venue: string;
  email: string;
  password: string;
}
export interface User {
  name: string;
  surname: string;
  partnerName: string;
  partnerSurname: string;
  date: string | number | Date | undefined;
  location: string;
  countDown: string | number | Date | undefined;
  id: string | number;
  hash_tag: string;
}

export interface Registry {
  name: string;
  price: number;
  image: string;
  imageFile: File | string;
}

export interface WebCreatorInt {
  title: string;
  date: Date | null;
  countdown: Date | null;
  story: { image: string; title: string; description: string }[];
  galleryImageFile: File | string;
  storyImage: string;
  storyTitle: string;
  storyDescription: string;
  cover: string;
  galleryImage: string;
  storyImageFile: File | string;
  imageCaption: string;
}
export interface WebView {
  title: string;
  date: string | number | Date | undefined;
  countdown: string | number | Date | undefined;
  story: { image: string; title: string; description: string }[];
  gallery: { image: string }[];
  cover: string;
}
export interface WebData {
  state: WebCreatorInt;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDate: (date: Date | null) => void;
  handleGallery: (e: any) => void;
  handleStoryImage: (e: any) => void;
  handleDescription: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  addStory: () => void;
  updateWebsite: () => void;
  handleCoverPhoto: (e: any) => void;
  alert: boolean;
  openAlert: (e: boolean) => void;
}
