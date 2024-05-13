import { Photo } from "./photo";

export interface Member {
    id: number;
    userName: string;
    age: number;
    photoUrl: string;
    knownAs: string;
    created: string;
    lastActive: string;
    introduction: string;
    lookingFor: string;
    city: string;
    country: string;
    photos: Photo[];
  }
 