
import { useEffect } from "react";

import { Box } from "@mui/material";
import { RichTreeView } from "@mui/x-tree-view";

import { useTreeContext } from "../context/TreeContext";

const TreeView: React.FC = () => {
  const { treeData, expandedNodes, setExpandedNodes, setSelectNode } =
    useTreeContext();

  useEffect(() => {
    const savedNodes = localStorage.getItem("expandedNodes");
    if (savedNodes) {
      setExpandedNodes(JSON.parse(savedNodes));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (expandedNodes.length > 0) {
      localStorage.setItem("expandedNodes", JSON.stringify(expandedNodes));
    }
  }, [expandedNodes]);

  const handleClick = (_e: React.SyntheticEvent | null, id: string) => {
    setExpandedNodes((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleFocus = (_e: React.SyntheticEvent | null, id: string) => {
    setSelectNode(id);
  };

  return (
    <Box sx={{ minHeight: 200, minWidth: 100}}>
      <RichTreeView
        items={treeData}
        expandedItems={expandedNodes}
        onItemClick={handleClick}
        onItemFocus={handleFocus}
      />
    </Box>
  );
};

export default TreeView;
