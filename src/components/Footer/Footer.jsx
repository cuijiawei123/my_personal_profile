import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText preText">
            {t('together')}
          </span>
          <span className="primaryText">
            {t('startBy')} <a href="mailto:cuij523@gmail.com"> {t('resume')}</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">{t('Information')}</span>
            <p>{t('district')}</p>
          </div>
          <ul className={css.menu}>
            <li>{t('Services')}</li>
            <li>{t('Works')}</li>
            <li>{t('Notes')}</li>
            <li>{t('Experience')}</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;