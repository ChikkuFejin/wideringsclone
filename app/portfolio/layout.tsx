export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
       
        <body style={{background:'black'}}>
        <main >
            {children}
        </main>
  
        </body>

      </html>
    );
  }