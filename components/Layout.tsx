import Header from './Header';

interface LayoutProps {
  children: any,
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        {children}
      </main>
    </>
  );
}
