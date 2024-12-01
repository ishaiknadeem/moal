import React, { useState, useRef, useEffect } from 'react';
import { X, Save, RotateCcw } from 'lucide-react';

interface ImageEditorProps {
  image: string;
  onClose: () => void;
  onSave: (editedImage: string) => void;
}

export function ImageEditor({ image, onClose, onSave }: ImageEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        applyFilters(ctx, img);
      };
    }
  }, [image, brightness, contrast, saturation, rotation, zoom]);

  const applyFilters = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement
  ) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Save the current context state
    ctx.save();

    // Move to center for rotation
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

    // Apply rotation
    ctx.rotate((rotation * Math.PI) / 180);

    // Apply zoom
    const scale = zoom / 100;
    ctx.scale(scale, scale);

    // Move back
    ctx.translate(-ctx.canvas.width / 2, -ctx.canvas.height / 2);

    // Apply filters
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;

    // Draw image
    ctx.drawImage(img, 0, 0);

    // Restore the context state
    ctx.restore();

    setHasChanges(true);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const editedImage = canvas.toDataURL('image/jpeg', 0.9);
      onSave(editedImage);
    }
  };

  const handleReset = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setRotation(0);
    setZoom(100);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#1a1b1e] rounded-lg p-6 w-[90vw] max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Edit Image</h3>
          <div className="flex items-center space-x-2">
            {hasChanges && (
              <button
                onClick={handleReset}
                className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-video bg-[#12141A] rounded-lg overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full object-contain" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-300">Basic Adjustments</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Brightness</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Contrast</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={contrast}
                    onChange={(e) => setContrast(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Saturation</label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={saturation}
                    onChange={(e) => setSaturation(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-300">Transform</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Rotation</label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Zoom</label>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-700">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
              disabled={!hasChanges}
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
