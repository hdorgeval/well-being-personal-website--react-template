import { FC, useMemo } from 'react';

export type Letter = 'A' | 'B' | 'C' | 'D' | 'I' | 'J' | 'S' | 'V';
export type BsFontSizeClassName = 'fs-3';

export interface OneLetterPillOwnProps {
  className?: string;
  children?: React.ReactNode;
}

const bgColorMapping: Record<Letter, string> = {
  A: 'bg-warning',
  B: 'bg-danger',
  C: 'bg-info',
  D: 'bg-primary',
  I: 'bg-info',
  J: 'bg-success',
  S: 'bg-warning',
  V: 'bg-success',
};

function computeBackgroundColorForLetter(letter: Letter): string {
  if (bgColorMapping[letter]) {
    return bgColorMapping[letter];
  }

  throw new Error(`Background color for letter '${letter}' is not yet implemented`);
}
function computePaddingForLetterAndFontSize(letter: Letter, fontSize: BsFontSizeClassName): string {
  switch (letter) {
    case 'C':
      switch (fontSize) {
        case 'fs-3':
          return 'p-2 px-1-08-rem';

        default:
          throw new Error(`'${fontSize}' for letter '${letter}' is not yet implemented`);
      }

    case 'D':
      switch (fontSize) {
        case 'fs-3':
          return 'p-2 px-1-08-rem';

        default:
          throw new Error(`'${fontSize}' for letter '${letter}' is not yet implemented`);
      }

    case 'I':
      switch (fontSize) {
        case 'fs-3':
          return 'p-2 px-1-45rem';

        default:
          throw new Error(`'${fontSize}' for letter '${letter}' is not yet implemented`);
      }

    case 'J':
      switch (fontSize) {
        case 'fs-3':
          return 'p-2 px-1-22-rem';

        default:
          throw new Error(`'${fontSize}' for letter '${letter}' is not yet implemented`);
      }

    case 'S':
      switch (fontSize) {
        case 'fs-3':
          return 'p-2 px-1-08-rem';

        default:
          throw new Error(`'${fontSize}' for letter '${letter}' is not yet implemented`);
      }

    case 'V':
      switch (fontSize) {
        case 'fs-3':
          return 'p-2 pt-0-56-rem px-1-17-rem';

        default:
          throw new Error(`'${fontSize}' for letter '${letter}' is not yet implemented`);
      }

    default:
      throw new Error(`Padding computation for letter '${letter}' is not yet implemented`);
  }
}
function computedClassNames(letter: Letter, fontSize: BsFontSizeClassName): string {
  const commonClassNames = 'border border-light rounded-circle font-sans-serif fw-bold';
  const computedPaddings = computePaddingForLetterAndFontSize(letter, fontSize);
  const computedBackgroundColor = computeBackgroundColorForLetter(letter);
  const result = `${commonClassNames} ${fontSize} ${computedPaddings} ${computedBackgroundColor}`;
  return result;
}
export const OneLetterPill: FC<OneLetterPillOwnProps> = ({ children, className }) => {
  const computedclassName = useMemo(() => {
    if (typeof children === 'string' && (className ?? 'fs-3').includes('fs-3')) {
      return `${computedClassNames(children as Letter, 'fs-3')} ${className ?? ''}`;
    }

    throw new Error(`Letter '${children}' is not yest implemented`);
  }, [children, className]);

  return <span className={computedclassName}>{children}</span>;
};

OneLetterPill.displayName = 'OneLetterPill';
