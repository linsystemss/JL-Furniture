
import style from './contact.module.css'

const Contact = () => {
     return (
          <div className={style.contactBlock}>
               <div className={style.feedBack}>
                  <div className={style.feedBackBlockLeft}>
                      <div className={style.inToleft}>
                          <p className='line'></p>
                          <b className={style.feedBackTitle}>Feedback</b>
                          <p className={style.feedBackText}>
                              Lorem Ipsum is simply
                              dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                              scrambled it to make a type specimen book. It has survived not only
                              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </p>
                      </div>
                  </div>
                   <div className={style.feedBackBlockRight}>
                       <div>
                          <label>Your Name</label>
                         <input placeholder={'name'} type={'text'} className={style.contactBlockInput}/>
                       </div>
                       <div>
                           <label>Email Address</label>

                           <input placeholder={'email'} type={'email'} className={style.contactBlockInput}/>
                       </div>
                       <div>
                           <label>Your Budget (Optional)</label>
                           <input placeholder={'Your Budget'} type={'text'} className={style.contactBlockInput}/>
                       </div>
                       <div>
                           <label>Furniture Description</label>
                           <textarea placeholder={'Description'} datatype={'textArea'} className={style.contactBlockInput}>

                           </textarea>
                       </div>
                       <div>
                           <button className={style.button}>Send</button>
                       </div>
                   </div>
               </div>
          </div>
     )
}

export default  Contact
