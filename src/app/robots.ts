import { MetadataRoute } from 'next';
import { publicUrl } from '@/lib/site-url';

const PRIVATE_PATHS = ['/admin/', '/api/', '/dashboard/', '/mi-aula/', '/simulador/', '/change-password/', '/login', '/evaluaciones/respuestas/'];

// Buscadores y asistentes de IA que pueden rastrear y citar el contenido publico
const SEARCH_AND_AI_BOTS = ['Googlebot', 'Google-Extended', 'Applebot', 'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'CCBot',
  'Googlebot-Image', 'Bingbot', 'msnbot', 'DuckDuckBot', 'YandexBot', 'Baiduspider', 'Slurp', 'BraveBot', 'Bravebot', 'OAI-SearchBot', 'Claude-SearchBot', 'Claude-User', 'Claude-Web', 'Applebot-Extended', 'Perplexity-User', 'DeepSeekBot', 'GrokBot', 'xAI-Bot', 'KimiBot', 'MoonshotBot', 'MistralAI-User', 'cohere-ai', 'YouBot', 'Meta-ExternalAgent', 'FacebookBot', 'Amazonbot', 'Bytespider', 'PhindBot', 'DuckAssistBot'];

// Herramientas de clonacion masiva del sitio
const CLONER_BOTS = ['HTTrack', 'WebCopier', 'WebReaper', 'WebZIP', 'SiteSnagger', 'Teleport', 'TeleportPro', 'Offline Explorer', 'SiteSucker', 'Wget', 'Scrapy', 'MJ12bot', 'Cyotek WebCopy'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: SEARCH_AND_AI_BOTS, allow: '/', disallow: PRIVATE_PATHS },
      { userAgent: CLONER_BOTS, disallow: '/' },
      { userAgent: '*', allow: '/', disallow: PRIVATE_PATHS },
    ],
    sitemap: publicUrl('/sitemap.xml'),
  };
}
