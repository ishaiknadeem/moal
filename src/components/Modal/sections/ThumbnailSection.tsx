import React, { useState, useRef } from 'react';
import { Edit, Plus, RefreshCw, Upload } from 'lucide-react';
import { ImageUploadMenu } from '../components/ImageUploadMenu';
import { ThumbnailGrid } from '../components/ThumbnailGrid';
import { ImageEditor } from '../components/ImageEditor';

export function ThumbnailSection() {
  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=800&auto=format&fit=crop&q=60");
  const [thumbnails, setThumbnails] = useState([
    "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=800&auto=format&fit=crop&q=60"
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnails(prev => [...prev, imageUrl]);
      setSelectedImage(imageUrl);
      setShowUploadMenu(false);
    }
  };

  const handlePlusClick = () => {
    fileInputRef.current?.click();
  };

  const handleEditClick = () => {
    setShowEditor(true);
  };

  const handleRegenerateImage = () => {
    // Mock regeneration with a random Unsplash image
    const newImage = `https://source.unsplash.com/random/1280x720?scope&timestamp=${Date.now()}`;
    setThumbnails(prev => [...prev, newImage]);
    setSelectedImage(newImage);
    setShowUploadMenu(false);
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div className="relative aspect-video bg-[#12141A] rounded-lg border border-gray-700 overflow-hidden">
          <img
            src={selectedImage}
            alt="Thumbnail preview"
            className="w-full h-full object-cover"
          />
          <button 
            onClick={() => setShowUploadMenu(true)}
            className="absolute bottom-4 left-4 flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </button>
        </div>

        <ThumbnailGrid
          thumbnails={thumbnails}
          onSelect={setSelectedImage}
          selectedImage={selectedImage}
          onPlusClick={handlePlusClick}
        />

        {showUploadMenu && (
          <ImageUploadMenu
            onClose={() => setShowUploadMenu(false)}
            onUpload={() => fileInputRef.current?.click()}
            onRegenerate={handleRegenerateImage}
            onEdit={handleEditClick}
          />
        )}

        {showEditor && (
          <ImageEditor
            image={selectedImage}
            onClose={() => setShowEditor(false)}
            onSave={(editedImage) => {
              setThumbnails(prev => [...prev, editedImage]);
              setSelectedImage(editedImage);
              setShowEditor(false);
            }}
          />
        )}

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
}