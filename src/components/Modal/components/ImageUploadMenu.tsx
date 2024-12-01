import React from 'react';
import { Upload, RefreshCw, SlidersHorizontal, X } from 'lucide-react';

interface ImageUploadMenuProps {
  onClose: () => void;
  onUpload: () => void;
  onRegenerate: () => void;
  onEdit: () => void;
}

export function ImageUploadMenu({ onClose, onUpload, onRegenerate, onEdit }: ImageUploadMenuProps) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1b1e] rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Thumbnail</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={onUpload}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            <Upload className="w-4 h-4" />
            <span>Upload from Computer</span>
          </button>
          
          <button
            onClick={onRegenerate}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Regenerate Image</span>
          </button>

          <button
            onClick={onEdit}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Edit Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}