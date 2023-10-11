type HeadingPropsType = {
  Element: keyof JSX.IntrinsicElements;
  children: string;
};

export default function HeadingAnimated({
  Element,
  children,
}: HeadingPropsType) {
  return (
    <div className="anm-typing-container">
      <Element className="anm-typing">{children}</Element>
    </div>
  );
}
