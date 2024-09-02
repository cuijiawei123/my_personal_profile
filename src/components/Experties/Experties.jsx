import React from 'react'
import css from './Experties.module.scss'
import {projectExperience, WhatDoIHelp} from '../../utils/data'
import {fadeIn, staggerContainer} from '../../utils/motion'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';

const Experties = () => {
  const { t } = useTranslation();
  return (
    <motion.section 
        variants={staggerContainer}  
        initial="hidden" 
        whileInView="show" 
        viewport={{once: false, amount: 0.25}} 
        className={css.wrapper}>
        <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                {
                    t('projectExperience', { returnObjects: true }).map((exp, i)=> {
                        return <motion.div 
                            variants={fadeIn("right","tween",(i+1)*0.2,1)}
                            className={css.exp} key={i}>
                            <div className='flexCenter' style={{background: exp.bg}}>
                                <exp.icon size={25} ></exp.icon>
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects} Project</span>
                            </div>
                        </motion.div>
                    })
                }
            </div>
            <div className={css.rightSide}>
                <span className='primaryText'>{t('whatIdo')}</span>
                {
                    t('WhatDoIHelp', { returnObjects: true }).map((paragraph,i)=> {
                        return <span className='secondaryText' key={i}>{paragraph}</span>
                    })
                }
                <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>285+</span>
                        <span className='secondaryText' >{t('projectsCompleted')}</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>1200+</span>
                        <span className='secondaryText'>{t('happyClients')}</span>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Experties