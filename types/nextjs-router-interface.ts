export default interface INextRouter {
  asPath: string;
  pathname: string;
  query: {};
  isFallback: boolean;
  basePath: string;
  locale: string;
  locales: string[];
  defaultLocale: string;
  isReady: boolean;
  // isPreview: boolean;
  // isLocaleDomain: boolean;
  // route: string;
}

/**
 * back: ƒ ()
 * beforePopState: ƒ ()
 * components: {/pokemon/[id]: {…}, /_app: {…}}
 * events: {on: ƒ, off: ƒ, emit: ƒ}
 * prefetch: ƒ ()
 * push: ƒ ()
 * reload: ƒ ()
 * replace: ƒ ()
 */