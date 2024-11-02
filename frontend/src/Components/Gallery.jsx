import makoverthanu1 from "../images/makeoverthanu1.jpg";
import makoverthanu2 from "../images/makeoverthanu2.jpg";
import makoverthanu3 from "../images/makeoverthanu3.jpg";
import {HashLink as Link} from 'react-router-hash-link';

const Gallery = () => {
  const GalleryImage = [makoverthanu1, makoverthanu2, makoverthanu3];

  return (
    <section id='gallery' className="py-20">
      {/* Gallery */}

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GalleryImage.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Gallery Image ${index}`}
                className="hover:scale-110 transition duration-300 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
