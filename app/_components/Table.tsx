type InputProps = {
  text: string;
};

export const Table: React.FC<InputProps> = ({ text }) => {
  const spaceCount = (text.match(/\s/g) || []).length;
  const EnglishWordCount = text
    .trim()
    .split(/\s+/)
    .map((word) => word.replace(/[.,!?]+$/, ""))
    .filter((word) => /^[a-zA-Z0-9]+$/.test(word)).length;
  const textWithoutSpaces = text.replace(/\s/g, "").length;

  return (
    <table className="w-full text-black">
      <tbody>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            文字数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {textWithoutSpaces}
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            空白数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {spaceCount}
            <span className="text-sm"> 文字</span>
          </td>
        </tr>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            英単語数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {EnglishWordCount}
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            文字数(空白)
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {text.length}
            <span className="text-sm"> 文字</span>
          </td>
        </tr>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            全ての文字数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            原稿用紙枚数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            <span className="text-sm"> 枚</span>
          </td>
        </tr>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            文章数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            文字数(空白なし)
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            <span className="text-sm"> 文字</span>
          </td>
        </tr>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue"></th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue"></th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            <span className="text-sm"> 文字</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
