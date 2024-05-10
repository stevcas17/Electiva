import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { History } from 'history';
import { getAccountQrValidation } from '../../services/Api-service';
import { Buttons, Image } from '../../components/atoms';
import InputFrom from '../../components/atoms/input/InputFrom';
import Nav from '../../components/molecules/navbar/Nav';
import { SelectForm } from '../../components/molecules/select/SelectForm';
import { ModalError } from '../../components/molecules/modalError/ModalError';
import { ModalValidator } from '../../components/molecules/modalValidator/ModalValidator';
import { images } from '../../../utils/icons/constants';
import { codes, inputValidate, options } from './interface';
import './Validator.scss';

export default ({ history }: { history: History }): JSX.Element => {
  const { t } = useTranslation();

  // Constants
  const DOCUMENT_REGEX = '^[0-9]*$';
  const DOCUMENT_TYPE: options[] = [
    {
      value: 'CC',
      label: 'Cédula de ciudadanía'
    },
    {
      value: 'NIT',
      label: 'Número de Identificación Tributaria'
    }
  ];
  const ADVISOR_ENTITY: options[] = [
    {
      value: 'BBOG',
      label: 'Banco de Bogotá'
    },
    {
      value: 'BOCC',
      label: 'Banco de Occidente'
    },
    {
      value: 'BPOP',
      label: 'Banco Popular'
    },
    {
      value: 'BAVV',
      label: 'Banco AV Villas'
    },
    {
      value: 'dale',
      label: 'Cuenta dale!'
    }
  ];
  const CODE_ENTITY: codes[] = [
    {
      entity: 'BBOG',
      code: '0001'
    },
    {
      entity: 'BOCC',
      code: '0023'
    },
    {
      entity: 'BPOP',
      code: '0002'
    },
    {
      entity: 'BAVV',
      code: '0052'
    },
    {
      entity: 'dale',
      code: '0097'
    }
  ];

  // Hooks
  //    Values
  const [entity, setEntity] = useState<options>({ value: '', label: '' });
  const [documentType, setDocumentType] = useState<options>({ value: '', label: '' });
  const [documentNumber, setDocumentNumber] = useState('');
  //      ipAddress
  const [ipAddress, setIpAddress] = useState('');
  //    Modal Info
  const [modalImage, setModalImage] = useState<string>('');
  const [modalMessage, setModalMessage] = useState<string>('');
  //    Effects and Check of selects
  const [documentTypeEffect, setDocumentTypeEffect] = useState<boolean>(false);
  const [documentTypeCheck, setDocumentTypeCheck] = useState<boolean>(false);
  const [advisorEntityEffect, setAdvisorEntityEffect] = useState<boolean>(false);
  const [advisorEntityCheck, setAdvisorEntityCheck] = useState<boolean>(false);
  //    Client validation button
  const [loadingService, setLoadingService] = useState<boolean>(false);
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);
  //    Success Modal
  const [showSuccessModal, setshowSuccessModal] = useState<boolean>(false);
  //    Error Modal
  const [showErrorModal, setshowErrorModal] = useState<boolean>(false);
  //    Form
  const [showForm, setShowForm] = useState<boolean>(false);

  // Functions
  const viewForm = () => {
    setShowForm(true);
  };

  const checkedDocTypeSelect = () => {
    setDocumentTypeEffect(true);
  };

  const checkedEntitySelect = () => {
    setAdvisorEntityEffect(true);
  };

  // Get Ip Address TODO!!!!!!!!!!!!!!!!!!
  const getIpAddress = async () => {
    setIpAddress('10.12.122.2');
  };

  // Bank Code
  const getCodeByEntity = (bank: string): string => {
    const found = CODE_ENTITY.find(item => item.entity === bank);
    return found ? found.code : '';
  };

  // Body Request
  const buildBodyRequest = (): inputValidate => {
    const body: inputValidate = {
      companyId: getCodeByEntity(entity.value),
      custIdType: documentType.value,
      custIdNum: documentNumber,
      ipaddress: ipAddress
    };
    return body;
  };

  // Request getAccountQrValidation
  const getClientValidation = async () => {
    setLoadingService(true);
    const body: inputValidate = buildBodyRequest();
    const response = await getAccountQrValidation(body);
    setLoadingService(false);
    if (response.status == 200) {
      if (response.data.data.getAccountQrValidation.MsgRsHdr.Status.StatusCode == 320) {
        setModalMessage(t('Validator.modal.alreadyLinked320'));
        setModalImage(images.iconOk320);
        setshowSuccessModal(true);
      } else if (response.data.data.getAccountQrValidation.MsgRsHdr.Status.StatusCode == 323) {
        setModalMessage(t('Validator.modal.available'));
        setModalImage(images.iconOk323);
        setshowSuccessModal(true);
      } else if (response.data.data.getAccountQrValidation.MsgRsHdr.Status.StatusCode == 300) {
        setModalMessage(t('Validator.modal.alreadyLinked300'));
        setModalImage(images.iconInvalid);
        setshowSuccessModal(true);
      } else {
        setshowErrorModal(true);
      }
    } else {
      setshowErrorModal(true);
    }
  };

  // useEffects
  // Select document type
  useEffect(() => {
    if (documentTypeEffect) {
      !documentType ? setDocumentTypeCheck(true) : setDocumentTypeCheck(false);
      setDocumentTypeEffect(false);
    }
  }, [documentType, documentTypeEffect]);
  // Select advisor entity
  useEffect(() => {
    if (advisorEntityEffect) {
      !entity ? setAdvisorEntityCheck(true) : setAdvisorEntityCheck(false);
      setAdvisorEntityEffect(false);
    }
  }, [entity, setAdvisorEntityEffect]);
  // Disable or activate the button when form is completed
  useEffect(() => {
    if (documentType && entity && documentNumber) {
      if (documentType.value == 'NIT' && documentNumber.length == 9) {
        setDisabledBtn(false);
      } else if (documentType.value == 'CC' && documentNumber.length > 5 && documentNumber.length < 11) {
        setDisabledBtn(false);
      } else {
        setDisabledBtn(true);
      }
    }
  }, [documentType, entity, documentNumber]);

  useEffect(() => {
    getIpAddress();
  }, []);

  return (
    <>
      <div className="container-validator">
        <Nav history={history} />
        {/* Main Page */}
        {!showForm && (
          <div className="container-validator__information">
            <div className="information__image">
              <Image className={'imageQR'} src={images.tendCard} width={'300'} height={'300'} alt={'imageQR'} />
            </div>
            <div className="information__description">
              <h1 dangerouslySetInnerHTML={{ __html: t('Validator.description') }} />
              <div className="description__divider">
                <div className="vl"></div>
              </div>
              <div className="description__actions">
                <Buttons
                  label={t('Validator.selectBtn')}
                  id="select_button"
                  className={`filled actions__select-button`}
                  onClick={() => {
                    viewForm();
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {/* Forms */}
        {showForm && (
          <div className="container-validator__Form-page">
            <ModalValidator
              showModal={showSuccessModal}
              closeModal={() => setshowSuccessModal(false)}
              image={modalImage}
              message={modalMessage}
            />
            <ModalError
              showModal={showErrorModal}
              closeModal={() => {
                setshowErrorModal(false);
              }}
            />
            <div className="Form-page__header">
              <h3 className="header__title">{t('Validator.form.title')}</h3>
              <div className="header__descrip">{t('Validator.form.description')}</div>
            </div>
            <div className="Form-page__body">
              <form className="body__form">
                {/* Field to select the advisor entity.*/}
                <SelectForm
                  name="advisorEntity"
                  inputId="advisorEntity"
                  dataTestid="advisorEntitySelectForm"
                  label={t('Validator.form.labelAdvisorEntity')}
                  value={entity || null}
                  onBlur={checkedEntitySelect}
                  onChange={(e: any) => setEntity(e)}
                  searcheable={false}
                  placeholder={t('Validator.form.placeAdvisorEntity')}
                  options={ADVISOR_ENTITY}
                  checkError={advisorEntityCheck}
                />
                {/* Field to select the document type.*/}
                <SelectForm
                  name="documentType"
                  inputId="documentType"
                  dataTestid="documentTypeSelectForm"
                  label={t('Validator.form.labelDocumentType')}
                  value={documentType || null}
                  onBlur={checkedDocTypeSelect}
                  onChange={(e: any) => setDocumentType(e)}
                  searcheable={false}
                  placeholder={t('Validator.form.placeDocumentType')}
                  options={DOCUMENT_TYPE}
                  checkError={documentTypeCheck}
                />
                {/* Field to document number.*/}
                <InputFrom
                  className={'formInput'}
                  label={t('Validator.form.labelDocumentNumber')}
                  inputType={'text'}
                  placeholder={t('Validator.form.placeDocumentNumber')}
                  pattern={DOCUMENT_REGEX}
                  value={documentNumber}
                  onChange={setDocumentNumber}
                  rules={[
                    { name: 'require', message: t('Validator.form.error.require') },
                    ...(documentType.value === 'NIT'
                      ? [{ name: 'nitSize', message: t('Validator.form.error.nitSize') }]
                      : []),
                    ...(documentType.value === 'CC'
                      ? [
                          { name: 'minDocSize', message: t('Validator.form.error.minSize') },
                          { name: 'maxSize', message: t('Validator.form.error.maxSize') }
                        ]
                      : [])
                  ]}
                  showAssistiveText={documentType.value === 'NIT' && true}
                  infoMessage={documentType.value === 'NIT' ? t('Validator.form.messageNIT') : ''}
                />
              </form>
              <div className="body__actions">
                <Buttons
                  loading={loadingService}
                  label={t('Validator.form.validateBtn')}
                  id="validate_button"
                  className={`filled actions__validate-button`}
                  disabled={disabledBtn}
                  onClick={() => {
                    getClientValidation();
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
