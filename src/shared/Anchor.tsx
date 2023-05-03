import { Link } from "react-router-dom";

type AnchorProps = {
  href: string;
  children: React.ReactNode;
};

export function Anchor(props: AnchorProps) {
  return (
    <Link className="underline text-cyan-500" to={props.href}>
      {props.children}
    </Link>
  );
}
