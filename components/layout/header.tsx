import styles from './header.module.css'
import {AppBar, Toolbar, Typography} from "@mui/material";
import {useRouter} from "next/router";

export default function Header() {

  const router = useRouter();
  const {username} = router.query;

  return (
    <AppBar position="static" className={styles.container}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} className={styles.logo} onClick={() => router.push('/')}>Git Tribes</Typography>
        <Typography variant="h6" className={styles.username} onClick={() => router.push(`/${username}`)}>{username}</Typography>

      </Toolbar>
    </AppBar>
  )
}