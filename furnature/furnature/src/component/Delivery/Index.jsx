import style from './style.module.css'
import {deliveriInfo} from '../../constant/delivery'

const Delivery = () => {
    return(
         <div className={style.deliveryBlock}>
             {
                 deliveriInfo.map(item => {
                      return (
                          <div  key={item.id} className={style.deliveryBlockIcons}>
                              <div className={style.deliveryBlockImg}>
                                  <img  className={style.layers} src={item.img}/>
                              </div>
                              <div>
                                  <b>{item.title}</b>
                                  <p className={style.text}>{item.text} {item.price}</p>
                              </div>
                          </div>
                      )
                 })
             }
         </div>
    )
}

export  default  Delivery
