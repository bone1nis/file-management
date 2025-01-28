import { createContext, useContext } from "react";

export type TreeNode = {
  id: string;
  label: string;
  verification: "verified" | "partly" | "notVerified";
  children: TreeNode[];
};

export type VerificationCounts = {
  verified: number;
  partly: number;
  notVerified: number;
  all: number;
};

type TreeContextType = {
  treeData: TreeNode[];
  expandedNodes: string[];
  selectNode: string;
  verificationCounts: VerificationCounts;
  setExpandedNodes: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectNode: React.Dispatch<React.SetStateAction<string>>;
  handleAddTree: (newFolder: string, folderId?: string) => void;
};

export const TreeContext = createContext<TreeContextType | null>(null);

export const useTreeContext = (): TreeContextType => {
  const data = useContext(TreeContext);

  if (!data) {
    throw new Error("You can't use a context without a provider wrapper");
  }

  return data;
};
