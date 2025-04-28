'use client';
import { useLoading } from '../context/LoadingContext';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const LoadHandler = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    const timeout = setTimeout(stopLoading,6000); // 6 second delay
    
    return () => {
      clearTimeout(timeout);
      stopLoading();
    };
  }, [pathname, searchParams, startLoading, stopLoading]);

  return null;
};