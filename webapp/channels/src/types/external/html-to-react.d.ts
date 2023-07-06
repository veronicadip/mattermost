// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

declare module 'html-to-react' {
    interface Node {
        type: string;
        name: string;
        attribs: {
            type: string;
            checked: boolean;
            'data-edited-post-id': string;
            href: any;
            mentionAttrib: string | undefined;
            [attribute: string]: string;
        };
        parentNode: {
            type?: string;
            name?: string;
        };
    }

    interface ProcessingInstruction {
        replaceChildren?: boolean;
        shouldProcessNode: (node: Node) => boolean;
        processNode: (
            node: Node,
            children?: React.ReactChildren,
            index: number
        ) => any;
    }

    declare class Parser {
        constructor(options?: any);
        parse(html: string): any;
        parseWithInstructions(
            html: any,
            isValidNode: any,
            processingInstructions: any,
            preprocessingInstructions?: any
        ): any;
    }

    declare class ProcessNodeDefinitions {
        constructor(arg: React.ReactNode);
        processDefaultNode: (node: any, children: any, index: number) => any;
    }
    export {Parser, Node, ProcessingInstruction, ProcessNodeDefinitions};
}

// function parse(html) {
//     const processingInstructions = new ProcessingInstructions();
//     return parseWithInstructions(html,
//       IsValidNodeDefinitions.alwaysValid,
//       processingInstructions.defaultProcessingInstructions);
//   };
