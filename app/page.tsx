export default function Page() {
  return (
    <main className="bg-offWhite min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-black text-2xl font-bold mb-4">文字数カウンター</h1>
        <textarea
          placeholder="ここにテキストを入力"
          className="w-full h-[300px] p-4 border border-gray rounded-md focus:outline-black mb-6 text-black"
        ></textarea>

        <div className="flex justify-end gap-4 mb-6">
          <button className="bg-lightBlue text-white px-4 py-2 rounded-md hover:bg-lightGray">入力履歴</button>
          <button className="bg-orange text-white px-4 py-2 rounded-md hover:bg-lightGray">クリア</button>
        </div>

        <table className="w-full text-black">
          <tbody>
            <tr>
              <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">文字数</th>
              <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">172<span className="text-sm"> 文字</span></td>
              <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">空白数</th>
              <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">172<span className="text-sm"> 文字</span></td>
            </tr>
            <tr>
              <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">英単語数</th>
              <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">172<span className="text-sm"> 文字</span></td>
              <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">文字数(空白なし)</th>
              <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">172<span className="text-sm"> 文字</span></td>
            </tr>
            <tr>
              <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">全ての文字数</th>
              <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">172<span className="text-sm"> 文字</span></td>
              <th className="border-white border-b-[1px] px-4 py-2 text-white bg-lightBlue">文字数(空白あり)</th>
              <td className="border border-lightBlue px-4 py-2 text-black font-bold text-2xl">172<span className="text-sm"> 文字</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
