'use client';
import { useLoading } from '../context/LoadingContext';

export const LoadingOverlay = () => {
  const { isLoading } = useLoading();

  return isLoading ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-transparent border-white"></div>
        <span className="text-white">Loading...</span>
      </div>
    </div>
  ) : null;
};