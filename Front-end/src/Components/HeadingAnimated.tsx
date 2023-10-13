type HeadingPropsType = {
  Element: keyof JSX.IntrinsicElements;
  children: string;
  language: string;
};

export default function HeadingAnimated({
  Element,
  children,
  language,
}: HeadingPropsType) {
  return (
    <div className={`anm-typing-container ${language}`}>
      <Element className="anm-typing">{children}</Element>
    </div>
  );
}
