import { useRef, useState } from "react";

const useEditInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const valueRef = useRef();
  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler, setValue, valueRef];
};

export default useEditInput;
