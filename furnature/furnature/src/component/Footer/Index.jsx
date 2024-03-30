import style from './style.module.css'
import  {socialMedia} from '../../constant/socialMedia'

const Footer = () => {
     return (
          <div className={style.footer}>
               <div>
                    <p>LOGO</p>
               </div>
              <nav>
                   <ul>
                        <li>Home</li>
                        <li>Our Works</li>
                        <li>About as</li>
                   </ul>
              </nav>
              <div className={style.socialMedia}>
                  {socialMedia.map((item) => {
                    return   <div key={item.id} className={style.socialMediaCircle}>
                          <img src={item.img} className={style.socialMediaIcons}  alt={item.name}/>
                      </div>
                  })}
              </div>
          </div>
     )
}


export default  Footer
