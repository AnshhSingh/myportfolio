"use client";

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { ArrowLeft, Download, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Use CDN for worker to avoid complex webpack config in Next.js app router
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [width, setWidth] = useState<number>(800);

  useEffect(() => {
    // Update width based on window size
    const updateWidth = () => {
      // Add padding for the layout (max-w-5xl)
      const newWidth = Math.min(window.innerWidth - 64, 800);
      setWidth(newWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="py-20 min-h-[calc(100vh-140px)] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center"
      >
        <div className="w-full flex items-center justify-between mb-8 px-4 md:px-0">
          <Link href="/" prefetch={true} className="group flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <a
            href="/resume.pdf"
            download="Ansh_Singh_Resume.pdf"
            className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        <div className="w-full bg-white dark:bg-white rounded-xl border border-border/40 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-4 md:p-8 min-h-[800px]">
          <Document
            file="/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center text-zinc-500 gap-4">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p className="font-mono text-sm">Loading document...</p>
              </div>
            }
            error={
              <div className="text-red-500 font-mono text-sm">
                Failed to load PDF. Please try downloading it directly.
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={width}
              className="drop-shadow-sm max-w-full"
              renderAnnotationLayer={true}
              renderTextLayer={true}
            />
          </Document>
        </div>

        {numPages > 1 ? (
          <div className="mt-8 flex items-center gap-4 text-sm font-mono text-muted-foreground">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(p => p - 1)}
              className="hover:text-foreground disabled:opacity-50 transition-colors px-3 py-1 border border-border rounded-md"
            >
              Previous
            </button>
            <span>
              {pageNumber} / {numPages}
            </span>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(p => p + 1)}
              className="hover:text-foreground disabled:opacity-50 transition-colors px-3 py-1 border border-border rounded-md"
            >
              Next
            </button>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
