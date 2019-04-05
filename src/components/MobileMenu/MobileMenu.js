import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import './MobileMenu.css';

export function MobileMenu({ isOpen, onClose, openOfferModal, locale }) {
  const classes = classNames('mobile-menu', {
    'mobile-menu--opened': isOpen,
  });

  return (
    <div className={classes}>
      <div className="mobile-menu__content">
        <div className="mobile-menu__header">
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
              <img
                src="/images/logo-header.svg"
                alt="dialog"
                className="header__logo-icon"
              />
            </Link>
          </div>
          <button
            className="header__button header__button--menu"
            onClick={onClose}
          />
        </div>
        <nav className="navigation">
          <Link
            to={`/${locale}/solution`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_solutions" />
          </Link>
          <Link
            to={`/${locale}/features`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_features" />
          </Link>
          <Link
            to={`/${locale}/download`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_download" />
          </Link>
          <Link
            to={`/${locale}/prices`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_pricing" />
          </Link>
          <Link
            to={`/${locale}/about`}
            className="navigation__link"
            activeClassName="navigation__link--active"
            onClick={onClose}
          >
            <FormattedMessage id="menu_about" />
          </Link>
        </nav>
        <button className="mobile-menu__button" onClick={openOfferModal}>
          <FormattedMessage id="button_get_offer" />
        </button>
      </div>
    </div>
  );
}
