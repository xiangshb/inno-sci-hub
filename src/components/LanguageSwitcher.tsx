import { useLanguageStore } from '@/lib/language-store';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguageStore();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="text-xs"
        >
          English
        </Button>
        <Button
          variant={language === 'zh' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('zh')}
          className="text-xs"
        >
          中文
        </Button>
      </div>
    </div>
  );
}
