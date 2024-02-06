import React, { useEffect, useState, useRef } from 'react';

const GalleryMasonry = (props) => {
    const inputEl = useRef(null);
    const [columns, setColumns] = useState(1);

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
    });

    const getColumns = (w) => {
        return (
            props.brakePoints.reduceRight((p, c, i) => {
                return c < w ? p : i;
            }, props.brakePoints.length) + 1
        );
    };

    const onResize = () => {
        if (!!inputEl.current) {
            const columnsNew = getColumns(inputEl.current.offsetWidth);
            if (columns !== columnsNew) {
                setColumns(columnsNew);
            }
        }
    };

    const mapChildren = () => {
        let col = [];
        const numC = columns;
        for (let i = 0; i < numC; i++) {
            col.push([]);
        }
        return props.children.reduce((p, c, i) => {
            p[i % numC].push(c);
            return p;
        }, col);
    };

    return (
        <React.Fragment>
            <div className="masonry" ref={inputEl}>
                {mapChildren().map((col, ci) => {
                    return (
                        <div className="column" key={ci}>
                            {col.map((child, i) => {
                                return <div key={i}>{child}</div>;
                            })}
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default GalleryMasonry;
