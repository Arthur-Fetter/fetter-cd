import homeStyles from "../styles/home.module.css"

export default function Home() {
  return (
    <>
    <div className={homeStyles.background_box}>
      <div className={homeStyles.content_box}>
        <h1>Welcome to my website!</h1>
        <p>what would you like to see?</p>
      </div>
    </div>

    {/*
    <div>
      <div className={"row " + homeStyles.content_box}>
        <div className={"col-8"}>
          <div className={"row "}>
            <div className={"col-9 " + homeStyles.inner_left}>
              <h2> yo from inside left</h2>
            </div>

            <div className={"col-3 " + homeStyles.inner_right}>
              <h2> yo from inside right</h2>
            </div>
          </div>
        </div>

        <div className={"col-4 "}>
          <h2>yo</h2>
        </div>
      </div>
      
      <div className="row">
        <div className="col-8">
          <h2>yo</h2>
        </div>

        <div className="col-4">
          <h2>yo</h2>
        </div>
      </div>
    </div>
    */}
    </>
  )
  
}
