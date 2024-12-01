import React from 'react';
import { Plus } from 'lucide-react';

interface ThumbnailGridProps {
  thumbnails: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
  onPlusClick: () => void;
}

export function ThumbnailGrid({ thumbnails, selectedImage, onSelect, onPlusClick }: ThumbnailGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {thumbnails.map((thumbnail, index) => (
        <button
          key={index}
          onClick={() => onSelect(thumbnail)}
          className={`aspect-video bg-[#12141A] rounded-lg border ${
            selectedImage === thumbnail ? 'border-blue-500' : 'border-gray-700'
          } overflow-hidden hover:border-blue-400 transition-colors`}
        >
          <img
            src={thumbnail}
            alt={`Thumbnail option ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
      <button
        onClick={onPlusClick}
        className="aspect-video flex items-center justify-center bg-[#12141A] rounded-lg border border-gray-700 hover:bg-gray-800"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}