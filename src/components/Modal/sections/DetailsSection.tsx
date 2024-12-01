import React, { useState } from 'react';
import { RefreshCw, SlidersHorizontal, Plus, X } from 'lucide-react';
import { TagInput } from '../components/TagInput';
import { RecommendedTags } from '../components/RecommendedTags';

export function DetailsSection() {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Description</h3>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Refine</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700">
              <RefreshCw className="w-4 h-4" />
              <span>Regenerate</span>
            </button>
          </div>
        </div>
        
        <div className="space-y-4 bg-[#12141A] p-6 rounded-lg border border-gray-700">
          <p className="text-gray-300">youtube.readonly: Access channel info, playlists, uploaded videos, and basic metadata (titles, descriptions).</p>
          <p className="text-gray-300">youtube: Manage uploads, update video metadata, control playlists, moderate comments, and adjust channel settings.</p>
          <p className="text-gray-300">yt-analytics-monetary.readonly: View earnings data, ad performance, and revenue insights from YouTube ads and monetization.</p>
          <p className="text-gray-300">yt-analytics.readonly: Access engagement metrics like views, likes, and comments for videos, aiding in performance analysis.</p>
          <p className="text-gray-300">youtube.force-ssl: See, edit, and permanently delete videos, ratings, comments, and captions with full control over video content.</p>
          <div className="text-sm text-gray-500 mt-4">608 of 5000</div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium">Tags</h4>
          <TagInput
            tags={tags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
          />
          <div className="text-sm text-gray-500">{tags.length} of 500</div>
        </div>

        <RecommendedTags
          onSelectTag={handleAddTag}
          recommendedTags={[
            { tag: 'demo scopes', score: 67 },
            { tag: 'scope applications', score: 59 },
            { tag: 'scope overview', score: 55 },
            { tag: 'hunting scopes', score: 53 },
            { tag: 'best scopes', score: 48 }
          ]}
        />
      </div>
    </div>
  );
}