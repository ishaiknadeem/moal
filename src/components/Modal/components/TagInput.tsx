import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TagInputProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

export function TagInput({ tags, onAddTag, onRemoveTag }: TagInputProps) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      onAddTag(input.trim());
      setInput('');
    }
  };

  return (
    <div className="bg-[#12141A] border border-gray-700 rounded-lg p-2">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-1 bg-gray-800 text-gray-200 px-2 py-1 rounded-md"
          >
            {tag}
            <button
              onClick={() => onRemoveTag(tag)}
              className="hover:text-gray-400"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add tags"
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 min-w-[120px]"
        />
      </div>
    </div>
  );
}