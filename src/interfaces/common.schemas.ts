// Interface representing an image file.
export interface ImageFile {
    id: string;
    file: File;
    preview: string;
    name: string;
    type: string;
}