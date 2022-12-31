import homeStyles from "../styles/home.module.css"
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter();

  
  return (
    <>

    <div className={homeStyles.background}>
      <ul className={homeStyles.content_list}>
        <li className={homeStyles.content_item}>
          <button className={homeStyles.button} type="button" onClick={() => router.push('/Engineering')}>
            Engineering
          </button> 
        </li>
        <li className={homeStyles.content_item}>
          <button className={homeStyles.button} type="button" onClick={() => router.push('/Lifestyle')}>
            Lifestyle
          </button>
        </li>
        <li className={homeStyles.content_item}>
          <button className={homeStyles.button} type="button" onClick={() => router.push('/Spaceship')}>
            Spaceship
          </button>
        </li>
      </ul>
    </div>

    </>
  )
  
}
