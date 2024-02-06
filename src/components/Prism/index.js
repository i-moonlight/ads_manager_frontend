import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Prism = (props) => {
    const theme = require('prism-react-renderer/themes/dracula'); // dracula, duotoneDark, duotoneLight, nightOwl, oceanicNext, shadesOfPurple, vsDark, vsDarkPlus
    return (
        <Highlight {...defaultProps} theme={theme} code={props.code} language={props.language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="m-t-15">
                    <pre className={className} style={style}>
                        <code className="language-markup">
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </code>
                    </pre>
                </div>
            )}
        </Highlight>
    );
};

export default Prism;
