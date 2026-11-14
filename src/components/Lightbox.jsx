import { useEffect, useRef } from 'react';

export default function Lightbox({ images, index, onChange, onClose }) {
  const dialogRef = useRef(null);
  const image = index === null ? null : images[index];

  useEffect(() => {
    const dialog = dialogRef.current;

    if (image && !dialog.open) {
      dialog.showModal();
    } else if (!image && dialog.open) {
      dialog.close();
    }
  }, [image]);

  function step(direction) {
    onChange((index + direction + images.length) % images.length);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
  }

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Enlarged image"
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {image && (
        <>
          <figure>
            <img src={image.src} alt={image.alt} />
            <figcaption>
              <span>{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
              {image.caption && <span>{image.caption}</span>}
            </figcaption>
          </figure>
          <div className="lightbox-controls">
            <button type="button" onClick={() => step(-1)}>Previous</button>
            <button type="button" onClick={() => step(1)}>Next</button>
            <button type="button" onClick={onClose} autoFocus>Close</button>
          </div>
        </>
      )}
    </dialog>
  );
}
