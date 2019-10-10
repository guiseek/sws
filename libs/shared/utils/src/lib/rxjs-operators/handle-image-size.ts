import { Observable } from 'rxjs';

export interface ImageFileCompressed {
  file: File
  data: string
}

export function handleImageSize(file: File, width = 600): Observable<ImageFileCompressed> {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Observable(observer => {
    reader.onload = ev => {
      const img = new Image();
      img.src = (ev.target as any).result;
      (img.onload = () => {
        const elem = document.createElement('canvas'); // Use Angular's Renderer2 method
        const scaleFactor = width / img.width;
        elem.width = width;
        elem.height = img.height * scaleFactor;
        const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
        ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
        ctx.canvas.toBlob(
          blob => {
            observer.next(
              {
                file: new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                }),
                data: ctx.canvas.toDataURL()
              }
            );
          },
          'image/jpeg',
          1,
        );
      }),
        (reader.onerror = error => observer.error(error));
    };
  });
}