import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { generatePromptIdeas, enhanceAndTranslatePrompt } from '../services/geminiService';
import InputCard from './InputCard';
import ResultCard from './ResultCard';
import Loader from './Loader';
import type { Field, PromptData, GeneratedPrompts } from '../types';

interface PromptGeneratorProps {
  fields: Field[];
  generatorType: 'Veo' | 'Imagen';
}

const PromptGenerator: React.FC<PromptGeneratorProps> = ({ fields, generatorType }) => {
  const initialFormState = useMemo(() => fields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {}), [fields]);
  
  const [formData, setFormData] = useState<PromptData>(initialFormState);
  const [generatedPrompts, setGeneratedPrompts] = useState<GeneratedPrompts | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showIdeaInput, setShowIdeaInput] = useState(false);
  const [ideaQuery, setIdeaQuery] = useState('');
  const ideaTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Atur ulang data formulir saat bidang berubah (beralih antara Veo/Imagen)
  useEffect(() => {
    setFormData(initialFormState);
    setGeneratedPrompts(null);
    setError(null);
    setShowIdeaInput(false);
  }, [initialFormState]);

  useEffect(() => {
    const textarea = ideaTextareaRef.current;
    if (textarea && showIdeaInput) {
      textarea.style.height = 'auto'; // Atur ulang tinggi
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`; // Atur ke tinggi konten
    }
  }, [ideaQuery, showIdeaInput]);

  const handleInputChange = useCallback((id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  }, []);

  const handleGenerateIdeas = async () => {
    if (!ideaQuery.trim()) {
      setError("Harap masukkan sebuah ide terlebih dahulu.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedPrompts(null);
    try {
      const ideas = await generatePromptIdeas(fields, generatorType, ideaQuery);
      setFormData(ideas);
      setShowIdeaInput(false);
      setIdeaQuery('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan tidak dikenal.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneratePrompt = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedPrompts(null);
    try {
      const result = await enhanceAndTranslatePrompt(formData, generatorType);
      setGeneratedPrompts(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan tidak dikenal.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormIncomplete = useMemo(() => {
    return Object.values(formData).some(value => value.trim() === '');
  }, [formData]);

  const IdeaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
  const GenerateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
  
  return (
    <div className="space-y-8 h-full">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-l-2xl rounded-b-2xl rounded-r-none shadow-lg border-t border-l border-b border-blue-100 h-full">
        <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
            <h2 className="text-xl font-bold text-blue-700">Parameter Prompt {generatorType}</h2>
            <div className="flex items-center gap-3">
              <button
                  onClick={() => setShowIdeaInput(prev => !prev)}
                  disabled={isLoading}
                  className="flex items-center justify-center bg-white hover:bg-blue-50 text-blue-600 font-semibold py-2 px-4 border border-blue-200 rounded-full shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  <IdeaIcon />
                  Ide Prompt
              </button>
            </div>
        </div>
        
        {showIdeaInput && (
            <div className="mb-6 animate__animated animate__fadeInDown [perspective:1000px]">
                <div className="relative">
                    <textarea
                        ref={ideaTextareaRef}
                        value={ideaQuery}
                        onChange={(e) => setIdeaQuery(e.target.value)}
                        placeholder="Masukkan ide Anda, cth: 'Panda raksasa bermain catur di bulan'"
                        className="w-full p-3 pr-32 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 resize-none overflow-y-hidden transform-gpu hover:-translate-y-1 hover:rotate-x-2 hover:rotate-y-1 hover:ring-2 hover:ring-blue-500/70"
                        rows={2}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleGenerateIdeas();
                            }
                        }}
                    />
                    <button
                        onClick={handleGenerateIdeas}
                        disabled={isLoading || !ideaQuery.trim()}
                        className="absolute right-1.5 top-1.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Hasilkan
                    </button>
                </div>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1000px]">
          {fields.map(field => (
            <InputCard
              key={field.id}
              field={field}
              value={formData[field.id] || ''}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleGeneratePrompt}
          disabled={isLoading || isFormIncomplete}
          title={isFormIncomplete ? "Harap isi semua kolom sebelum melanjutkan" : "Hasilkan prompt yang disempurnakan"}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
            <GenerateIcon />
            Buat & Sempurnakan Prompt
        </button>
      </div>

      {isLoading && <Loader />}
      {error && <div className="text-center bg-red-100 text-red-700 p-4 rounded-xl shadow">{error}</div>}
      {generatedPrompts && (
         <div className="animate__animated animate__fadeIn">
            <ResultCard prompts={generatedPrompts} />
         </div>
      )}
    </div>
  );
};

export default PromptGenerator;