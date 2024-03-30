import style from './style.module.css'

const About = () => {
     return (
          <div className={style.aboutBlock}>
               <div className={style.aboutBlockLeft}>
                    <div className={style.inToleft}>
                         <p className='line' ></p>
                         <b className={style.aboutBlockTitle}>Our Works</b>
                         <p className={style.aboutBlockText}>
                              Lorem Ipsum is simply
                              dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book. It has survived not only
                              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         </p>
                         <button className={style.aboutButton}>Learn More</button>
                    </div>
               </div>
               <div className={style.aboutBlockRight} style={{backgroundImage: `url('/aboutBg.jpg')`}}>
               </div>
          </div>
     )
}


export  default  About
