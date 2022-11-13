import {useRouter} from "next/router";
import Header from "./header";

export default function Layout({children}: any) {

  const router = useRouter();

  if (router.pathname === '/') {
    return (
        <>{children}</>
    )
  } else {
    return (
      <>
        <Header />
        {children}
      </>
    )
  }
}