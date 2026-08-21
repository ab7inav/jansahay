"use client";

import { useSaarthi } from "@/components/saarthi/SaarthiProvider";
import { SaarthiState, SaarthiGesture } from "@/types/saarthi";

export default function SaarthiPlayground() {
  const { setState, setGesture, say, guideToElement } = useSaarthi();

  const states: SaarthiState[] = [
    "idle", "hello", "happy", "curious", "listening", 
    "thinking", "confused", "explaining", "guiding", 
    "encouraging", "concerned", "success", "error", "emergency", "goodbye"
  ];

  const gestures: SaarthiGesture[] = [
    "none", "point_left", "point_right", "point_up", "point_down", "wave", "thumbs_up"
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in">
      <h1 className="text-3xl font-bold text-jansahay-navy mb-8">Saarthi Developer Playground</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* States Control */}
        <div>
          <h2 className="text-xl font-bold text-jansahay-navy mb-4 border-b pb-2">Emotion States</h2>
          <div className="flex flex-wrap gap-2">
            {states.map(s => (
              <button 
                key={s} 
                onClick={() => setState(s)}
                className="px-4 py-2 bg-white border border-border rounded-lg shadow-sm hover:bg-jansahay-blue hover:text-white transition-colors capitalize text-sm font-medium"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Gestures Control */}
        <div>
          <h2 className="text-xl font-bold text-jansahay-navy mb-4 border-b pb-2">Gestures & Actions</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {gestures.map(g => (
              <button 
                key={g} 
                onClick={() => setGesture(g)}
                className="px-4 py-2 bg-white border border-border rounded-lg shadow-sm hover:bg-jansahay-purple hover:text-white transition-colors capitalize text-sm font-medium"
              >
                {g.replace('_', ' ')}
              </button>
            ))}
          </div>
          
          <h2 className="text-xl font-bold text-jansahay-navy mb-4 border-b pb-2">Guide Engine Demo</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => guideToElement("#demo-target", "Here is the target element!")}
              className="px-6 py-3 bg-jansahay-navy text-white rounded-xl shadow-md hover:bg-jansahay-navy/90 transition-colors font-medium"
            >
              Trigger Guide Engine
            </button>
          </div>
        </div>
      </div>

      {/* Demo Target Element */}
      <div className="mt-24 p-12 bg-slate-100 rounded-3xl border-2 border-dashed border-border flex items-center justify-center">
        <div id="demo-target" className="p-8 bg-white shadow-lg rounded-2xl text-center">
          <h3 className="text-xl font-bold text-jansahay-navy">Target Element</h3>
          <p className="text-jansahay-text-secondary">Saarthi will point here</p>
        </div>
      </div>
    </div>
  );
}
