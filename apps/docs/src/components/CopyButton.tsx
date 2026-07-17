"use client";

import { useState } from "react";
import { Button } from "@jixic/react-ui";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <Button onClick={() => void copy()} size="sm" variant="secondary">
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}
