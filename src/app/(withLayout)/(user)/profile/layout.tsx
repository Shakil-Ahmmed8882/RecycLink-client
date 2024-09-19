import { Navbar } from "@/src/components/navbar";
import Container from "@/src/shared/ui/Container";
import Sidebar from "@/src/shared/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="flex">
        <Sidebar />
        <main className="w-4/5">{children}</main>
      </div>
    </Container>
  );
}
