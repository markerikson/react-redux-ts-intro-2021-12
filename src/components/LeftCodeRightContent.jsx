import React from "react";
import {CodePane, Layout, Fill} from "spectacle";

export const LeftCodeRightContent = ({leftSource, leftLanguage="javascript", leftStyle={}, rightContent,rightWidth, rightStyle={}}) => (
    <Layout>
        <Fill style={{marginRight : 5, ...leftStyle}}>
            <CodePane source={leftSource} lang={leftLanguage} />
        </Fill>
        <Fill style={{marginLeft : 5, ...rightStyle}}>
            {rightContent}
        </Fill>
    </Layout>
);