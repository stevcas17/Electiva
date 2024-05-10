import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '@mdi/react';
import { Image, Modal } from '../../atoms';
import { icons, images } from '../../../../utils/icons/constants';
import { IModalError } from './interface';
import './ModalError.scss';

/**
 * ModalRedirect component
 * @param {boolean} showModal Show modal or not
 * @param {number} closeModal Close modal or not
 * @returns {JSX.Element}
 */

export const ModalError = ({ showModal, closeModal }: IModalError): JSX.Element => {
  const { t } = useTranslation();

  const [showModalState, setShowModalState] = useState<boolean>(false);

  const closeModalAction = () => {
    setShowModalState(false);
    closeModal();
  };

  useEffect(() => {
    setShowModalState(showModal);
  }, [showModal]);

  return (
    <Modal showModal={showModalState} className="error-modal-validator">
      <div className="error-modal-validator__content">
        <div
          className="content__close"
          data-testid={'modal-button-close'}
          id={'modal-button-close'}
          onClick={() => closeModalAction()}
        >
          <Icon size={1.2} path={icons.mdiCloseCircle} style={{ color: '#d9dbe9' }} />
        </div>
        <section className="content__header">
          <div className="header__img-victor">
            <Image src={images.iconProblem} alt="img-victor" width={'125'} height={'125'} className={'imgVictor'} />
          </div>
          <div className="header__title">{t('Validator.modal.error.title')}</div>
          <div
            className="header__description"
            dangerouslySetInnerHTML={{ __html: t('Validator.modal.error.description') }}
          />
        </section>
        <div className="content__information">
          <div className="information__title">
            <Image src={images.msgIcon} alt="msg-icon" width={'44'} height={'auto'} className={'msgIcon'} />
            {t('Validator.modal.error.callUs')}
          </div>
          <div className="information__call">
            <div dangerouslySetInnerHTML={{ __html: t('Validator.modal.error.phones.city') }} />
            <div dangerouslySetInnerHTML={{ __html: t('Validator.modal.error.phones.country') }} />
          </div>
          <div className="information__scheduler">
            <div className="scheduler__title">{t('Validator.modal.error.schedulerTitle')}</div>
            <div dangerouslySetInnerHTML={{ __html: t('Validator.modal.error.scheduler.week') }} />
            <div dangerouslySetInnerHTML={{ __html: t('Validator.modal.error.scheduler.weekend') }} />
          </div>
        </div>
      </div>
    </Modal>
  );
};
