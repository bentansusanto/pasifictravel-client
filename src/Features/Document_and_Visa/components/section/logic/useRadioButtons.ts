// hooks/useRadioButtons.ts
import { useState } from 'react';

export const useRadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return {
    selectedValue,
    handleChange,
  };
};
  