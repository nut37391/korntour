"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const ImageGalleryService = ({ imageGallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? imageGallery.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(imageGallery[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === imageGallery.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentImage(imageGallery[newIndex]);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-green-cyan text-sm uppercase tracking-widest mb-2">
            Explore Our Tour
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Image Gallery
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[2px] w-8 bg-green-cyan/50"></div>
            <div className="h-[2px] w-16 bg-green-cyan"></div>
            <div className="h-[2px] w-8 bg-green-cyan/50"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {imageGallery.map((image, index) => (
            <div
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              key={index}
              onClick={() => openModal(image, index)}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Image Number */}
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1} / {imageGallery.length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {currentImage && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Image Preview"
          className="fixed inset-0 z-50 flex justify-center items-center outline-none"
          overlayClassName="fixed inset-0 bg-black/90 z-50"
          ariaHideApp={false}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200"
              onClick={goToPrevious}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
              <Image
                src={currentImage.src}
                alt="Preview image"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Next Button */}
            <button
              className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200"
              onClick={goToNext}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {imageGallery.length}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ImageGalleryService;
