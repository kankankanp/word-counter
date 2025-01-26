import { Dispatch, SetStateAction } from "react";

type InputProps = {
  text: string,
  setText: Dispatch<SetStateAction<string>>;
}

export const Input: React.FC<InputProps> = ({text, setText}) => {

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setText(e.target.value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder="ここにテキストを入力"
      className="w-full h-[300px] p-4 border border-gray rounded-md focus:outline-black mb-6 text-black"
    ></textarea>
  );
};
