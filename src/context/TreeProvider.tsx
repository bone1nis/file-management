import { ReactNode, useState } from "react";

import { TreeContext, TreeNode, VerificationCounts } from "./TreeContext";

const TreeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [treeData, setTreeData] = useState<TreeNode[]>([
    {
      id: "asdasd",
      label: "home",
      verification: "verified",
      children: [
        {
          id: "sdfsdf",
          label: "home-pets",
          verification: "verified",
          children: [],
        },
      ],
    },
    {
      id: "dfgsdfgsdfg",
      label: "shop",
      verification: "notVerified",
      children: [
        {
          id: "sdfsasdaasdsdf",
          label: "shop-pets",
          verification: "notVerified",
          children: [],
        },
        {
          id: "asdasdasdasda",
          label: "shop-cars",
          verification: "notVerified",
          children: [],
        },
      ],
    },
    {
      id: "dfgsdfgsdasdfg",
      label: "car",
      verification: "partly",
      children: [],
    },
  ]);

  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);
  const [selectNode, setSelectNode] = useState<string>("");
  const [verificationCounts, setVerificationCounts] =
    useState<VerificationCounts>({
      verified: 2,
      partly: 1,
      notVerified: 3,
      all: 6,
    });

  const updateVerificationCounts = (field: TreeNode["verification"]) => {
    setVerificationCounts((prev: VerificationCounts) => {
      const newFieldValue = prev[field] + 1;
      const newAllValue = prev.all + 1;

      return { ...prev, [field]: newFieldValue, all: newAllValue };
    });
  };

  const handleAddTree = (newFolder: string, folderId: string = "root") => {
    const addNode = (nodes: TreeNode[]): TreeNode[] =>
      nodes.map((node) => {
        if (node.id === folderId) {
          const newChild: TreeNode = {
            id: crypto.randomUUID(),
            label: newFolder,
            verification: "notVerified",
            children: [],
          };

          updateVerificationCounts("notVerified");

          return {
            ...node,
            children: [...(node.children || []), newChild],
          };
        }

        return {
          ...node,
          children: node.children ? addNode(node.children) : [],
        };
      });

    setTreeData((prev) => {
      if (folderId === "root") {
        updateVerificationCounts("notVerified");
        
        return [
          ...prev,
          {
            id: crypto.randomUUID(),
            label: newFolder,
            verification: "notVerified",
            children: [],
          },
        ];
      } else {
        const updatedTree = addNode(prev);

        return updatedTree;
      }
    });
  };

  return (
    <TreeContext.Provider
      value={{
        treeData,
        expandedNodes,
        selectNode,
        setExpandedNodes,
        setSelectNode,
        handleAddTree,
        verificationCounts,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
};

export default TreeProvider;
