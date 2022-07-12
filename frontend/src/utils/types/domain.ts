import { Timestamp } from 'firebase/firestore/lite';

export interface PartialPost {
  title: string;
  content: string;
  tags: string[];
  published: boolean;
}

export interface StoredPost {
  id: string;
  title: string;
  content: string;
  ownerId: string;
  tags: string[];
  published: boolean;
  publishDate: Timestamp;
}
