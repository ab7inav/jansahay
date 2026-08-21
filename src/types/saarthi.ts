export type SaarthiState = 
  | "idle"
  | "hello"
  | "happy"
  | "curious"
  | "listening"
  | "thinking"
  | "confused"
  | "explaining"
  | "guiding"
  | "encouraging"
  | "concerned"
  | "success"
  | "error"
  | "emergency"
  | "goodbye";

export type SaarthiGesture = 
  | "none"
  | "point_left"
  | "point_right"
  | "point_up"
  | "point_down"
  | "wave"
  | "thumbs_up";

export interface SaarthiContextType {
  state: SaarthiState;
  setState: (state: SaarthiState) => void;
  message: string | null;
  say: (message: string, duration?: number) => void;
  clearMessage: () => void;
  guideMode: boolean;
  setGuideMode: (enabled: boolean) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  gesture: SaarthiGesture;
  setGesture: (gesture: SaarthiGesture) => void;
  guideToElement: (selector: string, message?: string) => void;
  isDragging: boolean;
  setIsDragging: (dragging: boolean) => void;
}
