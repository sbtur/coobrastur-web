import { useCallback, useState } from 'react';

interface UseToggleReturn {
  isEnabled: boolean;
  toggle: () => void;
  setEnable: () => void;
  setDisable: () => void;
}

export const useToggle = (initialState = false): UseToggleReturn => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);

  const setEnable = useCallback(() => {
    setState(true);
  }, []);

  const setDisable = useCallback(() => {
    setState(false);
  }, []);

  return {
    isEnabled: state,
    toggle,
    setEnable,
    setDisable,
  };
};
