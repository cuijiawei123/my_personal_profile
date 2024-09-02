import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../../utils/switch'; // 引入Switch组件

const Header = () => {
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
    iconRef,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter `}>
        <div className={css.name}><img className="iconImg" src='/vite.svg' alt=""></img> Cuijiawei</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#experties">{t('Services')}</a></li>
          <li><a href="#work">{t('Works')}</a></li>
          <li><a href="#portfolio">{t('Experience')}</a></li>
          <li><a href="#people">{t('Testimonials')}</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+86  15091753891</p>
            <BiPhoneCall size={"40px"} />
          </li>
          <li>
            <LanguageSwitch />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          ref={iconRef}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;