import { useSearchParams } from 'next/navigation';

export const usePageAuth = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  return {
    token,
  };
};
