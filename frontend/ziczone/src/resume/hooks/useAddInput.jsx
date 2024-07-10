import { useState } from "react";

const useAddInput = () => {
    const [inputs, setInputs] = useState([0]);

    const addInput = () => {
        setInputs(prevInputs => [...prevInputs, prevInputs.length]);
    };

    const removeInput = (id) => {
        setInputs(prevInputs => prevInputs.filter(inputId => inputId !== id));
    };

    return [inputs, addInput, removeInput];
};

export default useAddInput;