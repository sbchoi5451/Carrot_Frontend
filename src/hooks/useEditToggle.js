import { useState } from "react";

const useEditToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handler = () => {
    setValue((value) => !value);
  };

  return [value, handler, setValue];
};

export default useEditToggle;
