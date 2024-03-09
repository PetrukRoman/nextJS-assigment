import Header from "../components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Test app",
  description: "A sample test app",
};

export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {props.children}
        {props.modal}

        <div id="modal-root" />
      </body>
    </html>
  );
}
