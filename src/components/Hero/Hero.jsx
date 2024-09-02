import React from 'react'
import css from './Hero.module.scss'
import {fadeIn, slideIn, staggerContainer} from '../../utils/motion'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';

const hero = () => {
  const { t } = useTranslation();
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{once: false, amount: 0.25}} 
            variants={staggerContainer} 
            className={`innerWidth ${css.container}`}> 
            <div className={` ${css.upperElements}`}>
                <motion.span className={`primaryText ${css.hello}`} variants={fadeIn("right","tween",0.2,1)}>
                   {t('hello')}
                </motion.span>
                <motion.span className={`secondaryText ${css.hello}`} variants={fadeIn("left","tween",0.2,1)}>
                    {t('simpleThing')}
                </motion.span>
            </div>


            <motion.div className={css.person} variants={fadeIn("up","tween",0.3,1)}>
                <motion.img variants={slideIn("up","tween",0.5,1.3)}
                src='./huanlian.PNG' alt=''></motion.img>
            </motion.div>
 
            <a className={css.email} href='mailto:cuij523@gmail.com'>
                cuij523@gmail.com
            </a>

            <div className={` ${css.lowerElements}`}>
                <motion.div variants={fadeIn("right","tween",0.3,1)}
                    className={css.experience}>
                    <div className="primaryText">6</div>
                    <div className="secondaryText">
                        <div>
                            {t('year')}
                        </div>
                        <div>
                            {t('exper')}
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("left","tween",0.5,1)}
                    className={css.certificate}>
                    <img src='./certificate.png' alt=''></img>
                    <span className=''>{t('cert')}</span>
                    <span className={css.profational}>{t('profational')}</span>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default hero