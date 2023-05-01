type CardProps = {
  children: React.ReactNode;
};

export function Card(props: CardProps) {
  return (
    <div className="border w-96 border-cyan-600 p-4 max-w-md m-4 rounded shadow-md bg-slate-200">
      {props.children}
    </div>
  );
}
