import { Link } from "react-router-dom";

type AnchorProps = {
  href: string;
  children: React.ReactNode;
};

export function Anchor(props: AnchorProps) {
  return (
    <Link className="text-cyan-500 underline" to={props.href}>
      {props.children}
    </Link>
  );
}
