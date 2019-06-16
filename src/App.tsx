import { css } from 'linaria/lib';
import { styled } from 'linaria/lib/react';
import React from 'react';
import './App.css';

const Flexbox = styled.div`
    display: flex;
`;

const Work = styled.div`
    border: 1px solid lightcoral;
    flex: 0 0 calc(50% - 12px * 2);
`;

const Broken = styled.div`
    border: 1px solid lightcoral;
    flex: 0 0 calc(50% - (12px * 2));
`;

// The code below Broken does not work.
const BrokenWithCSS = css`
    border: 1px solid lightcoral;
    flex: 0 0 calc(50% - (12px * 2));
`;

const App: React.FC = () => {
    return (
        <div className="App">
            <Flexbox>
                <Work>Works!</Work>
                <Broken>Broken.</Broken>
                <div className={BrokenWithCSS}>Test</div>
            </Flexbox>
        </div>
    );
};

export default App;
