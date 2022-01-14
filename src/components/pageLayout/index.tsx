import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import { PageLayoutContainer } from './styles'
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import React, { useState } from 'react';




const PageLayout: React.FC = ({ children }) => {

    const originalLayouts = getFromLS("layouts") || {};
    const [newLayout, setLayout] = useState(JSON.parse(JSON.stringify(originalLayouts)))

    const ReactGridLayout = WidthProvider(RGL);


    const layout = [
        { i: '1', x: 5, y: 1, w: 5, h: 5 },
        { i: '2', x: 2, y: 5, w: 3, h: 5 },
        { i: '3', x: 4, y: 0, w: 5, h: 5 },
        { i: '4', x: 7, y: 0, w: 5, h: 5 }
    ];

    const onLayoutChange = (layout: any) => {
        saveToLS("layouts", layout);
    }

    return (
        <PageLayoutContainer>
            <ReactGridLayout
                verticalCompact={false}
                preventCollision={true}
                isBounded={true}
                className="layout"
                layout={newLayout} cols={13}
                rowHeight={30}
                onLayoutChange={(layout: Layout[]) =>
                    onLayoutChange(layout)
                }
            >
                {React.Children.map(children || null, (child, i) => {
                    return <div key={i} data-grid={layout[i]}>{child}</div>;
                })}
            </ReactGridLayout>
        </PageLayoutContainer>


    );
};

function getFromLS(key: string) {
    if (localStorage) {
        try {
            let ls = localStorage.getItem("rgl-8");
            if (ls) {
                let newLs = JSON.parse(ls)
                return newLs[key];

            }
        } catch (e) {
            /*Ignore*/
        }
    }
}

function saveToLS(key: string, value: any) {
    if (localStorage) {
        localStorage.setItem(
            "rgl-8",
            JSON.stringify({
                [key]: value
            })
        );
    }
}

export default PageLayout;
