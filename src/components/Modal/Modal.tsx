import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ModalHeader } from './ModalHeader';
import { DetailsSection } from './sections/DetailsSection';
import { TitleSection } from './sections/TitleSection';
import { ThumbnailSection } from './sections/ThumbnailSection';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function Modal({ isOpen, onClose, title }: ModalProps) {
  const [activeTab, setActiveTab] = useState('details');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1b1e] text-white rounded-lg w-full max-w-4xl mx-4">
        <div className="flex flex-col h-[90vh]">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-300 hover:text-white">
                Preview
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Publish
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <ModalHeader activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'details' && <DetailsSection />}
            {activeTab === 'title' && <TitleSection />}
            {activeTab === 'thumbnail' && <ThumbnailSection />}
          </div>
        </div>
      </div>
    </div>
  );
}