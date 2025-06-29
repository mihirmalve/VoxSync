import React from 'react'
import { useState } from 'react'
import Email from './Email/Email'
import Phone from './Phone/Phone' 
import styles from './StepPhoneEmail.module.css' 

const phoneEmailMap = {
  phone : Phone,
  email : Email
}
const StepPhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];
 
  
return (
   <>
    <div className={styles.cardWrapper}>
      <div>
      <div className={styles.buttonWrap}>
      <button  className={`${styles.tabButton} ${type === 'phone' && styles.active}`} onClick={() => setType('phone')}> <img src="/images/Phone1.png" alt="phone" /></button>
      <button className={`${styles.tabButton} ${type === 'email' && styles.active}`} onClick={() => setType('email')}><img src="/images/Email.png" alt="email" /></button> 
      </div>
      <Component onNext={onNext}/>
      </div>
     
    </div>
   </>
) 
}

export default StepPhoneEmail
 