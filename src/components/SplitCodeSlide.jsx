import React from "react";
import {CodePane, Layout, Fill} from "spectacle";

export const SplitCodeSlide = ({leftSource, rightSource, leftLanguage="javascript", rightLanguage="javascript", leftStyle={}, rightWidth, rightStyle={}}) => (
    <Layout>
        <Fill style={{marginRight : 5, ...leftStyle}}>
            <CodePane source={leftSource} lang={leftLanguage} />
        </Fill>
        <Fill style={{marginLeft : 5, ...rightStyle}}>
            {rightSource && <CodePane source={rightSource} lang={rightLanguage} />}
        </Fill>
    </Layout>
);