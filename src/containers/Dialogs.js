import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "../components/Dialogs";


const Dialogs = ({ items }) => {
    const [inputValue, setValue] = useState("");
    //const [filtred, setFiltredItems] = useState(Array.from(items));

    let filtred = Array.from(items);


    const onChangeInput = e => {
        const value = e.target.value;
        filtred = filtred.filter(dialog => dialog.user.fullname.indexOf(value) >= 0);

        setValue(e.target.value);
    };
    return <BaseDialogs items={filtred} onSearch={onChangeInput} inputValue={inputValue} />
};

export default Dialogs;