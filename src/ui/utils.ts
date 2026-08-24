/**
 * The languages the service ships resources for. Ulm University runs in German and English, and
 * a voter should be able to read a verdict about their own election in their own language.
 */
export const supportedLanguages = ['en', 'de'] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

/**
 * Who runs this verifier. It belongs in the page chrome rather than in the report, because it
 * is a property of the service and not of any one election (see issue #8).
 */
export const serviceOperator = import.meta.env.VITE_SERVICE_OPERATOR as string;
