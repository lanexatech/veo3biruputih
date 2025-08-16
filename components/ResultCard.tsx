import React, { useState, useEffect, useRef } from 'react';
import type { GeneratedPrompts } from '../types';

interface ResultCardProps {
  prompts: GeneratedPrompts;
}

const CopyIcon: React.FC<{ copied: boolean }> = ({ copied }) => {
  if (copied) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
};

const OutputField: React.FC<{ title: string; content: string; editable: boolean; onContentChange?: (newContent: string) => void; isJson: boolean }> = ({ title, content, editable, onContentChange, isJson }) => {
    const [copied, setCopied] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    
    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    let formattedContent = content;
    if (isJson) {
      try {
        if (content && typeof content === 'string') {
          formattedContent = JSON.stringify(JSON.parse(content), null, 2);
        } else {
          formattedContent = "{}"; // Default untuk konten yang tidak valid
        }
      } catch (e) {
        console.warn("Gagal mem-parsing JSON untuk ditampilkan:", e);
        // Biarkan formattedContent sebagai string mentah jika parsing gagal
      }
    }


    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height to allow shrinking
            textarea.style.height = `${textarea.scrollHeight}px`; // Set to content height
        }
    }, [formattedContent]);
    
    return (
        <div className="bg-slate-50 p-4 rounded-lg shadow-inner flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-slate-700">{title}</h4>
                <button onClick={handleCopy} className="p-1.5 rounded-full hover:bg-slate-200 transition-colors group">
                    <CopyIcon copied={copied} />
                </button>
            </div>
            <textarea
                ref={textareaRef}
                value={formattedContent}
                readOnly={!editable}
                onChange={(e) => onContentChange?.(e.target.value)}
                className={`w-full bg-transparent text-sm p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none overflow-y-auto max-h-64 ${editable ? 'text-slate-800' : 'text-slate-600'}`}
                rows={5}
            />
        </div>
    );
};


const ResultCard: React.FC<ResultCardProps> = ({ prompts }) => {
    const [editablePrompts, setEditablePrompts] = useState(prompts);

    useEffect(() => {
        setEditablePrompts(prompts);
    }, [prompts]);

    const handleIdTextChange = (newContent: string) => {
        setEditablePrompts(prev => ({...prev, idText: newContent}));
    };
    
    const handleIdJsonChange = (newContent: string) => {
        setEditablePrompts(prev => ({...prev, idJson: newContent}));
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Hasil Prompt Akhir</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OutputField title="Bahasa Indonesia (Teks)" content={editablePrompts.idText} editable={true} onContentChange={handleIdTextChange} isJson={false} />
                <OutputField title="Bahasa Inggris (Final)" content={editablePrompts.enText} editable={false} isJson={false}/>
                <OutputField title="Bahasa Indonesia (JSON)" content={editablePrompts.idJson} editable={true} onContentChange={handleIdJsonChange} isJson={true}/>
                <OutputField title="Bahasa Inggris (JSON Final)" content={editablePrompts.enJson} editable={false} isJson={true}/>
            </div>
        </div>
    );
};

export default ResultCard;