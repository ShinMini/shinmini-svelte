import { browser } from '$app/environment'
import { register, init } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./routes/home/contexts/en.json'));
register('ko', () => import('./routes/home/contexts/ko.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale,
})