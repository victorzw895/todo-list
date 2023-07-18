import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
    codeString: string;
}

const CodeBlock: FC<CodeBlockProps> = ({codeString}) => {
    return (
        <SyntaxHighlighter
            language="typescript"
            style={atomDark}
            showLineNumbers
            wrapLines
            customStyle={{
                width: '860px'
            }}
        >
            {codeString}
        </SyntaxHighlighter>
    )
}

export default CodeBlock;