"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const ClientResume = dynamic(() => import("./ClientResume"), {
  ssr: false,
  loading: () => (
    <div className="py-20 min-h-[calc(100vh-140px)] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-muted-foreground gap-4">
        <Loader2 className="w-8 h-8 animate-spin" />
        <p className="font-mono text-sm">Loading viewer...</p>
      </div>
    </div>
  ),
});

export default function ResumeViewer() {
  return <ClientResume />;
}
