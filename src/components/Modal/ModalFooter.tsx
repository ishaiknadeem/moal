import React from 'react';

export function ModalFooter() {
  return (
    <div className="border-t border-gray-700 p-4 flex justify-between items-center">
      <button className="px-4 py-2 text-gray-300 hover:text-white">
        Preview
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Publish
      </button>
    </div>
  );
}