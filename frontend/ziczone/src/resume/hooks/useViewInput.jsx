import { useState } from "react";
const useAddInput = (initialComponent) => {
    const [inputs, setInputs] = useState([initialComponent]);
    const addInput = (Component) => {
        setInputs([...inputs, <Component key={inputs.length} />]);
    };
    return [inputs, addInput];
};
export default useAddInput;