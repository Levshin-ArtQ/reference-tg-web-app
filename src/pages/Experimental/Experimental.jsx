import React, { useState } from 'react';
import useCloudStorage from 'src/hooks/useCloudStorage';

const Experimental = () => {
    const { setItem, getItem } = useCloudStorage();
    const [answer, setAnswer] = useState('undefined')
    const setSign = () => {
        setItem('PlanzUpSign', 17);
    }
    const getSign = () => {
        setAnswer(getItem('PlanzUpSign'));
    }
    
    return (
        <div>
            <button className="save_item" onClick={setSign}>save sign</button>
            <button className="save_item" onClick={getSign}>get sign</button>
            <div className="answer">{answer}</div>
            
        </div>
    );
};

export default Experimental;