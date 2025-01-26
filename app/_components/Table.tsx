type InputProps = {
  text: string;
};

export const Table: React.FC<InputProps> = ({ text }) => {
  const englishWordCount = text
    .trim()
    .split(/\s+/)
    .map((word) => word.replace(/[.,!?]+$/, ""))
    .filter((word) => /^[a-zA-Z0-9]+$/.test(word)).length;
  const allTextsCount = text.replace(/[ \t\n]/g, "").length;
  const textWithoutIndentsCount = text.replace(/\n/g, "").length;
  const halfWidthCount = Array.from(text).filter((char) =>
    char.match(/[\u0020-\u007E\uFF61-\uFF9F]/)
  ).length;

  const fullWidthCount = Array.from(text).filter((char) =>
    char.match(/[^\u0020-\u007E\uFF61-\uFF9F]/)
  ).length;

  const sentenceCount = text.replace(/[^。！？]/g, "").length;

  const calculateManuscriptPages = (text: string): number => {
    const japaneseTextCount = text.replace(
      /[^\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]/g,
      ""
    ).length;

    const charactersPerPage = 400;

    return Math.ceil(japaneseTextCount / charactersPerPage);
  };
  return (
    <table className="w-full text-black">
      <tbody>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            改行、空白を除いた文字数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {allTextsCount}
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            英単語数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {englishWordCount}
            <span className="text-sm"> 文字</span>
          </td>
        </tr>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            半角文字数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {halfWidthCount}
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            全角文字数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {fullWidthCount}
            <span className="text-sm"> 文字</span>
          </td>
        </tr>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            空白を含む文字数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {textWithoutIndentsCount}
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            改行、空白を含む文字数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {text.length}
            <span className="text-sm"> 文字</span>
          </td>
        </tr>
        <tr>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            文章数
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {sentenceCount}
            <span className="text-sm"> 文字</span>
          </td>
          <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">
            原稿用紙枚数(400字)
          </th>
          <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">
            {calculateManuscriptPages(text)}
            <span className="text-sm"> 枚</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
