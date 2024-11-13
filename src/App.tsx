import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { xml } from '@codemirror/lang-xml';
import { githubLight, githubDark } from '@uiw/codemirror-theme-github';
import { Sun, Moon, Upload, Download } from 'lucide-react';
import { xml2js } from 'xml-js';
import TreeView from './components/TreeView';
import Footer from './components/Footer';

const DEFAULT_XML = `<?xml version="1.0" encoding="UTF-8"?>
<root>
  <person>
    <name>John Doe</name>
    <age>30</age>
    <address>
      <street>123 Main St</street>
      <city>New York</city>
    </address>
  </person>
</root>`;

function App() {
  const [xmlContent, setXmlContent] = useState(DEFAULT_XML);
  const [treeData, setTreeData] = useState(() => xml2js(DEFAULT_XML));
  const [isDark, setIsDark] = useState(false);

  const handleXmlChange = useCallback((value: string) => {
    setXmlContent(value);
    try {
      const parsed = xml2js(value);
      setTreeData(parsed);
    } catch (error) {
      console.error('Invalid XML');
    }
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        handleXmlChange(content);
      };
      reader.readAsText(file);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([xmlContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tree-structure.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="flex flex-col h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
          <h1 className="text-2xl font-bold">XML Tree Viewer</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <label className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <Upload className="w-5 h-5" />
              <input
                type="file"
                accept=".xml"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <button
              onClick={handleDownload}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-2 gap-4 p-4 overflow-hidden">
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="h-full overflow-auto">
              <CodeMirror
                value={xmlContent}
                height="100%"
                theme={isDark ? githubDark : githubLight}
                extensions={[xml()]}
                onChange={handleXmlChange}
                className="h-full"
              />
            </div>
          </div>
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="h-full overflow-auto">
              <TreeView data={treeData} />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;