import React from 'react';
import './Profile.scss';
import { useTranslation } from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import { updateUserData } from '../../actions';
import {useHistory} from 'react-router-dom';
import * as allActions from '../../actions';

function App() {

  const { t } = useTranslation();
  const bio = useSelector((state) => state.userData);

  const { first_name, last_name, id } = bio;

  const mapping = {
    profile_name: first_name,
    profile_last_name: last_name,
  }

  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { profile_name, profile_last_name } = Object.fromEntries(formData);
    updateUserData({ profile_name }, { profile_last_name }, { id })(dispatch);
  }

  const textEdit = (e) => {
    const { id, value } = e.target
    mapping[id] = value;
  }

  let history = useHistory();
  const logOut = () => {
    dispatch(allActions.logOut());
    history.push('/');
  }

  return (
    <section className="profile-page">
      <div className="profile">
        <div className="profile__header">
          {t('profile.header')}
        </div>
        <div className="profile__body">
          <div className="profile__sidebar">
            <div className="photo">

            </div>
          </div>
          <form onSubmit={sendData} className="profile__form profile-form">
            <div className="profile-form__header">
              {t('profile.subheader1')}
            </div>
            <div className="profile-form__section">
              <label htmlFor="profile_name" />
              <input onChange={textEdit} type="text" className="profile-form__input" name="name" id="profile_name"
                placeholder={t('profile.main.name')} defaultValue={mapping.profile_name} required />
            </div>
            <div className="profile-form__section">
              <label htmlFor="profile_last_name" />
              <input onChange={textEdit} type="text" id="profile_last_name" name="vacancy" defaultValue={mapping.profile_last_name}
                       className="profile-form__input" placeholder={t('profile.main.last_name')} required />
            </div>
            <div className="profile-form__buttons">
              <div className="logOut" onClick={logOut}>{t('profile.logOut')}</div>
              <input className="button button--yellow" type="submit" value={t('profile.btn')}/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
