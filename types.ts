
export type GeneratorMode = 'veo' | 'imagen' | 'tutorial';

export interface Field {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'textarea' | 'select';
  options?: string[];
  icon: React.ReactNode;
}

export type PromptData = { [key: string]: string };

export interface GeneratedPrompts {
  idText: string;
  enText: string;
  idJson: string;
  enJson: string;
}