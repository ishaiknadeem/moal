import React from 'react';
import { Plus } from 'lucide-react';

interface RecommendedTag {
  tag: string;
  score: number;
}

interface RecommendedTagsProps {
  recommendedTags: RecommendedTag[];
  onSelectTag: (tag: string) => void;
}

export function RecommendedTags({ recommendedTags, onSelectTag }: RecommendedTagsProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium">Recommended</h4>
      <div className="flex flex-wrap gap-2">
        {recommendedTags.map(({ tag, score }, index) => (
          <button
            key={index}
            onClick={() => onSelectTag(tag)}
            className="group flex items-center space-x-2 bg-[#12141A] hover:bg-gray-800 rounded-md border border-gray-700"
          >
            <span className="px-3 py-2">{tag}</span>
            <span className="px-2 py-2 border-l border-gray-700 text-yellow-500 text-sm">
              {score}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}