import { isStopword } from '../stopwords';

/**
 * The types of query tokens that are supported.
 */
export enum QueryTokenType {
  Invalid = 'Invalid', // unsupported
  PresenceTerm = 'PresenceTerm', // prefixed term with `+` or `-`
  ExactTerm = 'ExactTerm', // quoted term
  Term = 'Term', // simple terms
}

// Test at: https://regex101.com
const termRegexes: { [key: string]: RegExp } = {
  [QueryTokenType.PresenceTerm]:
    /(?<PresenceTerm>(?:(\s+)?([-+]))((\w{2,})|"(?:[^"]+)"))/, // unquoted or quoted
  [QueryTokenType.ExactTerm]: /(?<ExactTerm>("(?:[^"]+)"))/, // quoted
  [QueryTokenType.Term]: /(?<Term>[^ ]+)/, // unquoted
};

// Ordered from most to least specific
const tokenizerRegex = new RegExp(
  `${termRegexes[QueryTokenType.PresenceTerm].source}|` +
    `${termRegexes[QueryTokenType.ExactTerm].source}|` +
    `${termRegexes[QueryTokenType.Term].source}`,
  'g'
);

/**
 * A query token has a type and text.
 */
export class QueryToken {
  constructor(public type: QueryTokenType, public text: string) {}
}

/**
 * Tokenizes a raw query text into the supported tokens.
 */
export class QueryTokenizer {
  readonly queryText: string;
  private queryInvalidChars = /(?:[\^*()_}\]\\[{>\\<|\\/`~}]+)/gi;

  constructor(rawQuery: string) {
    this.queryText = rawQuery.replace(this.queryInvalidChars, '');
  }

  private getTokenType(matchGroup: { [key: string]: string } = {}) {
    let type = QueryTokenType.Invalid;

    if (matchGroup.PresenceTerm) {
      type = QueryTokenType.PresenceTerm;
    } else if (matchGroup.ExactTerm) {
      type = QueryTokenType.ExactTerm;
    } else if (matchGroup.Term) {
      type = QueryTokenType.Term;
    }

    return type;
  }

  tokenize() {
    const tokens: QueryToken[] = [];

    for (const match of this.queryText.matchAll(tokenizerRegex)) {
      if (match && match.groups) {
        const type = this.getTokenType(match.groups);
        const text = (match[0] || '').trim();

        if (text && !isStopword(text)) {
          tokens.push(new QueryToken(type, text));
        }
      }
    }

    return tokens;
  }
}