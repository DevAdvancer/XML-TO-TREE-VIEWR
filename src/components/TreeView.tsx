import React from 'react';
import { ChevronRight, ChevronDown, File, Folder } from 'lucide-react';

interface TreeNodeProps {
  node: any;
  level: number;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const hasChildren = node.elements && node.elements.length > 0;

  return (
    <div className="select-none">
      <div
        className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 rounded cursor-pointer"
        style={{ paddingLeft: `${level * 20}px` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {hasChildren ? (
          <span className="mr-1">
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        ) : (
          <File className="w-4 h-4 mr-1" />
        )}
        <span className="font-mono">
          {node.type === 'element' ? (
            <span className="text-blue-600 dark:text-blue-400">{node.name}</span>
          ) : (
            <span className="text-gray-600 dark:text-gray-400">{node.text}</span>
          )}
        </span>
      </div>
      {isOpen && hasChildren && (
        <div>
          {node.elements.map((child: any, index: number) => (
            <TreeNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

interface TreeViewProps {
  data: any;
}

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className="p-4 overflow-auto">
      <TreeNode node={data} level={0} />
    </div>
  );
};

export default TreeView;