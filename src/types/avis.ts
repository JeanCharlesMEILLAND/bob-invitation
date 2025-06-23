import { StrapiPictureType } from "./common";

export interface AvisInterface {

    auteur : string;
    auteurImage ?: StrapiPictureType ;
    note : number;
    date_publication : string;
    avis : string;
}