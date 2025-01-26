"use client";

import { useState } from "react";
import { Input } from "./Input";
import { Table } from "./Table";
import { ClearButton } from "./ClearButton";

export const CounterCard = () => {
  const [text, setText] = useState("");

  return (
    <>
      <Input text={text} setText={setText} />
      <div className="flex justify-end gap-4 mb-6">
        <ClearButton setText={setText} />
      </div>
      <Table text={text} />
    </>
  );
};
