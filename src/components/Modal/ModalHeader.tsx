import React from 'react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium transition-colors ${
        isActive
          ? 'text-blue-500 border-b-2 border-blue-500'
          : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      {label}
    </button>
  );
}

interface ModalHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ModalHeader({ activeTab, onTabChange }: ModalHeaderProps) {
  return (
    <div className="border-b border-gray-700">
      <div className="flex space-x-4 px-4">
        <Tab
          label="Details"
          isActive={activeTab === 'details'}
          onClick={() => onTabChange('details')}
        />
        <Tab
          label="Title"
          isActive={activeTab === 'title'}
          onClick={() => onTabChange('title')}
        />
        <Tab
          label="Thumbnail"
          isActive={activeTab === 'thumbnail'}
          onClick={() => onTabChange('thumbnail')}
        />
      </div>
    </div>
  );
}