import style from './style.module.css'

const Gallery = () =>  {
     return (
          <div className={style.galleryBlock}>
               <div className={style.galleryBlockLeft}>
                   <div className={style.inToleft}>
                        <p className='line' style={{background: 'black'}}></p>
                        <b className={style.galleryBlockTitle}>Comfortable Sofa</b>
                        <p className={style.galleryBlockText}>
                            Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                   </div>
               </div>
               <div className={style.galleryBlockRight} style={{backgroundImage: `url('/galleryBackground.jpg')`}}>
               </div>
          </div>
     )
}


 export default  Gallery

