import { Dispatch, SetStateAction } from "react";

type ClearButtonProps = {
  setText: Dispatch<SetStateAction<string>>;
};

export const ClearButton: React.FC<ClearButtonProps> = ({ setText }) => {
  return (
    <button
      onClick={() => setText("")}
      className="bg-orange text-white px-4 py-2 rounded-md hover:bg-lightGray"
    >
      クリア
    </button>
  );
};
