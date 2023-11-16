import { UseLanguageContext } from "../contexts/LanguageContext";

type HeadingPropsType = {
  Element: keyof JSX.IntrinsicElements;
  children: string;
  className?: string | null;
  delay?: string;
};

export default function HeadingAnimated({
  Element,
  children,
  className,
  delay,
}: HeadingPropsType) {
  const { language } = UseLanguageContext();

  return (
    <div
      className={`anm-typing-container ${language.languageKey} ${className}`}
    >
      <Element className={`anm-typing ${delay}`}>{children}</Element>
    </div>
  );
}
