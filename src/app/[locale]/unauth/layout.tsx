import { unstable_setRequestLocale } from "next-intl/server";

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <body className="max-w-7xl m-auto">
      <main className="lg:ml-[calc(21rem)] h-screen mx-6">
        {props.children}
      </main>
    </body>
  );
}
