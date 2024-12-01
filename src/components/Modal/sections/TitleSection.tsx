import React from 'react';
import { Rocket } from 'lucide-react';

export function TitleSection() {
  return (
    <div className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Video Title</h3>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">
            <Rocket className="w-4 h-4" />
            <span>Score with Boost</span>
          </button>
        </div>
        
        <div className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-3 bg-[#12141A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Enter your video title"
            defaultValue="Demo video: how will the scopes will be used?"
          />
          <div className="text-sm text-gray-400">45 of 100</div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Suggested Titles</h4>
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-sm rounded-md bg-gray-800 hover:bg-gray-700">
                Refine
              </button>
              <button className="px-4 py-2 text-sm rounded-md bg-gray-800 hover:bg-gray-700">
                Generate more
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {[
              "High Magnification Scopes: A Practical Demonstration",
              "Don't Buy Scopes Online",
              "Why You Shouldn't Trust Scope Reviews"
            ].map((title, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#12141A] rounded-lg border border-gray-700">
                <span>{title}</span>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">
                  <Rocket className="w-4 h-4" />
                  <span>Score with Boost</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}