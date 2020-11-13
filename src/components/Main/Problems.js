import React from 'react';
import _ from 'lodash';
import './Problems.scss';
import './Main.scss';
import {useTranslation} from 'react-i18next';
import cn from 'classnames';

function Problems() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const problem = (className, number, item) => {
    const btnClass = cn("user-problems__problem", "pb-4", className);
    return (
      <div className={btnClass} key={_.uniqueId()}>
        <div className="user-problems__background">
          <div className="user-problems__num">0{number}</div>
          <div className="user-problems__description">{item}</div>
        </div>
      </div>
    );
  }

  const problemList = () => {
    switch (currentLanguage) {
      case ('ru-RU'): {
        const problems = [t('problems.problem1'), t('problems.problem2'), t('problems.problem3'), t('problems.problem4')]
        return problems.map((item, index) => problem('col-md-3', index + 1, item))
      }
      case ('en-EN'): {
        const problems = [t('problems.problem1'), t('problems.problem2'), t('problems.problem3')]
        return problems.map((item, index) => problem('col-md-4', index + 1, item))
      }
      default:
        throw new Error(`Unknown language: '${currentLanguage}'!`);
    }
  }

  return (

    <section className="user-problems">
      <div className="container">
        <div className="text-center">
          <h3 className="user-problems__subheader">{t('problems.title')}</h3>
        </div>
        <div className="row">
          {problemList()}
        </div>
      </div>
    </section>
  );
}

export default Problems;
