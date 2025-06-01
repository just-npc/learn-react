import type { ComponentChildren } from 'preact'

interface CardProps {
  children: ComponentChildren;
}

export default function BookCard({ children }: CardProps) {
  return (
    <section className="card">
      {children}
    </section>
  );
}
