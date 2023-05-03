import clsx from "clsx";

type CardProps = {
  /** CSS class **applied** to the root div
   * List:
   * - one
   * - two
   *
   * more info [here](https://tailwindcss.com/docs)
   */
  className?: string;
  children: React.ReactNode;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={clsx(
        className,
        "border w-96 border-cyan-600 p-4 max-w-md rounded shadow-md bg-slate-200"
      )}
    >
      {children}
    </div>
  );
}
