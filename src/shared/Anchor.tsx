type AnchorProps = {
  href: string;
  children: React.ReactNode;
};

export function Anchor(props: AnchorProps) {
  return (
    <a className="text-cyan-500 underline" href={props.href}>
      {props.children}
    </a>
  );
}
