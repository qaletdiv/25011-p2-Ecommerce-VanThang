import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300"],
  display: "swap",
});

const RootLayout = ({children} : {children: React.ReactNode} ) => {
    return <html lang="en" >
        <body className={`antialiased ${poppins.variable}}`} >
        
            {children}
        </body>
    </html>
}

export default RootLayout