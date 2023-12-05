import { Translator } from 'google-translate-api-x';
export const translator = new Translator({ from: 'en', to: 'ru', forceBatch: false, tld: 'es' });
