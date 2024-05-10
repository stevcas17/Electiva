import { shallow } from 'enzyme';
import axios from 'axios';
import wait from 'waait';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { historyMock } from '../../../../__mocks__/fileMock.js';
import Validator from './Validator';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';

jest.setTimeout(30000);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({})
}));

jest.mock('axios', () => {
  const mAxiosInstance = {
    post: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() }
    }
  };
  return {
    create: jest.fn(() => mAxiosInstance),
    ...mAxiosInstance
  };
});

jest.mock('../../components/molecules/navbar/Nav', () => {
  return {
    __esModule: true,
    default: () => <div>Mock Nav</div>
  };
});

jest.mock('../../components/atoms/nav-items/Nav-items', () => {
  return {
    __esModule: true,
    default: () => <div>Mock items</div>
  };
});

jest.mock('../../components/atoms/nav-items/Link-items', () => {
  return {
    __esModule: true,
    default: () => <div>Mock link</div>
  };
});

describe('Validator test page', () => {
  it('Render Validator page with history', () => {
    const wrapper = shallow(<Validator history={historyMock}></Validator>);
    expect(wrapper).toBeDefined();
  });

  it('Render form page by cliking select-button', async () => {
    const wrapper = shallow(<Validator history={historyMock}></Validator>);
    const selectBtn = wrapper.find('.actions__select-button');
    expect(selectBtn.length).toBe(1);
    // Click to selectBtn
    await selectBtn.at(0).prop('onClick')({});
    // Validate form page with form button
    const validateBtn = wrapper.find('.actions__validate-button');
    expect(validateBtn.prop('disabled')).toBe(true);
  });

  it('Fill form to able button', async () => {
    render(<Validator history={historyMock}></Validator>);
    const selectBtn = screen.getByText('Validator.selectBtn');
    expect(selectBtn).toBeDefined();
    // // Click to selectBtn
    userEvent.click(selectBtn);
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));

    // FORM
    // Get entity selctForm
    const advisorEntitySelect = screen.getByLabelText('Validator.form.labelAdvisorEntity');
    await act(async () => {
      await selectEvent.select(advisorEntitySelect, 'Banco de Bogotá');
    });
    // Select an option for advisor entity
    userEvent.click(screen.getByText('Banco de Bogotá'));

    // Get document type selctForm
    const documentTypeSelect = screen.getByLabelText('Validator.form.labelDocumentType');
    await act(async () => {
      await selectEvent.select(documentTypeSelect, 'Cédula de ciudadanía');
    });
    // Select an option for document type
    userEvent.click(screen.getByText('Cédula de ciudadanía'));

    // Get input of the form
    const input: any = screen.getByPlaceholderText('Validator.form.placeDocumentNumber');
    // type document number
    userEvent.type(input, '1014325689');
    await act(() => wait(5002));
    expect(input.value).toBe('1014325689');

    //Validate button
    const validateBtn: any = screen.getByText('Validator.form.validateBtn');
    expect(validateBtn.disabled).toBe(false);
  });

  it('Execute service to show success modal (320)', async () => {
    global.window = Object.create(window);
    window['grecaptcha'] = {
      ready: () => jest.fn(),
      execute: () => Promise.resolve(() => jest.fn())
    };
    (axios.create().post as jest.Mocked<any>).mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          data: {
            getAccountQrValidation: {
              MsgRsHdr: {
                Status: {
                  StatusCode: 320,
                  ServerStatusCode: 320,
                  StatusDesc: 'Test success modal 320'
                }
              }
            }
          }
        }
      })
    );
    render(<Validator history={historyMock}></Validator>);
    const selectBtn = screen.getByText('Validator.selectBtn');
    expect(selectBtn).toBeDefined();
    // // Click to selectBtn
    userEvent.click(selectBtn);
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));

    // FORM
    // Get entity selctForm
    const advisorEntitySelect = screen.getByLabelText('Validator.form.labelAdvisorEntity');
    await act(async () => {
      await selectEvent.select(advisorEntitySelect, 'Banco de Occidente');
    });
    // Select an option for advisor entity
    userEvent.click(screen.getByText('Banco de Occidente'));

    // Get document type selctForm
    const documentTypeSelect = screen.getByLabelText('Validator.form.labelDocumentType');
    await act(async () => {
      await selectEvent.select(documentTypeSelect, 'Número de Identificación Tributaria');
    });
    // Select an option for document type
    userEvent.click(screen.getByText('Número de Identificación Tributaria'));

    // Get input of the form
    const input: any = screen.getByPlaceholderText('Validator.form.placeDocumentNumber');
    // type document number
    userEvent.type(input, '101432568');
    await act(() => wait(5002));
    expect(input.value).toBe('101432568');

    //Validate button
    const validateBtn: any = screen.getByText('Validator.form.validateBtn');
    expect(validateBtn.disabled).toBe(false);
    // click validate button
    await userEvent.click(validateBtn);
    // await act(async () => {
    // });
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    // screen.debug();
    const successModal = screen.getByText('Validator.modal.alreadyLinked320');
    expect(successModal).toBeDefined();
  });

  it('Execute service to show success modal (323)', async () => {
    global.window = Object.create(window);
    window['grecaptcha'] = {
      ready: () => jest.fn(),
      execute: () => Promise.resolve(() => jest.fn())
    };
    (axios.create().post as jest.Mocked<any>).mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          data: {
            getAccountQrValidation: {
              MsgRsHdr: {
                Status: {
                  StatusCode: 323,
                  ServerStatusCode: 323,
                  StatusDesc: 'Test success modal 323'
                }
              }
            }
          }
        }
      })
    );
    render(<Validator history={historyMock}></Validator>);
    const selectBtn = screen.getByText('Validator.selectBtn');
    expect(selectBtn).toBeDefined();
    // // Click to selectBtn
    userEvent.click(selectBtn);
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));

    // FORM
    // Get entity selctForm
    const advisorEntitySelect = screen.getByLabelText('Validator.form.labelAdvisorEntity');
    await act(async () => {
      await selectEvent.select(advisorEntitySelect, 'Cuenta dale!');
    });
    // Select an option for advisor entity
    userEvent.click(screen.getByText('Cuenta dale!'));

    // Get document type selctForm
    const documentTypeSelect = screen.getByLabelText('Validator.form.labelDocumentType');
    await act(async () => {
      await selectEvent.select(documentTypeSelect, 'Número de Identificación Tributaria');
    });
    // Select an option for document type
    userEvent.click(screen.getByText('Número de Identificación Tributaria'));

    // Get input of the form
    const input: any = screen.getByPlaceholderText('Validator.form.placeDocumentNumber');
    // type document number
    userEvent.type(input, '101432568');
    await act(() => wait(5002));
    expect(input.value).toBe('101432568');

    //Validate button
    const validateBtn: any = screen.getByText('Validator.form.validateBtn');
    expect(validateBtn.disabled).toBe(false);
    // click validate button
    await userEvent.click(validateBtn);
    // await act(async () => {
    // });
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    // screen.debug();
    const successModal = screen.getByText('Validator.modal.available');
    expect(successModal).toBeDefined();
  });

  it('Execute service to show success modal (300)', async () => {
    global.window = Object.create(window);
    window['grecaptcha'] = {
      ready: () => jest.fn(),
      execute: () => Promise.resolve(() => jest.fn())
    };
    (axios.create().post as jest.Mocked<any>).mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          data: {
            getAccountQrValidation: {
              MsgRsHdr: {
                Status: {
                  StatusCode: 300,
                  ServerStatusCode: 321,
                  StatusDesc: 'Test success modal 300'
                }
              }
            }
          }
        }
      })
    );
    render(<Validator history={historyMock}></Validator>);
    const selectBtn = screen.getByText('Validator.selectBtn');
    expect(selectBtn).toBeDefined();
    // // Click to selectBtn
    userEvent.click(selectBtn);
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));

    // FORM
    // Get entity selctForm
    const advisorEntitySelect = screen.getByLabelText('Validator.form.labelAdvisorEntity');
    await act(async () => {
      await selectEvent.select(advisorEntitySelect, 'Banco de Occidente');
    });
    // Select an option for advisor entity
    userEvent.click(screen.getByText('Banco de Occidente'));

    // Get document type selctForm
    const documentTypeSelect = screen.getByLabelText('Validator.form.labelDocumentType');
    await act(async () => {
      await selectEvent.select(documentTypeSelect, 'Número de Identificación Tributaria');
    });
    // Select an option for document type
    userEvent.click(screen.getByText('Número de Identificación Tributaria'));

    // Get input of the form
    const input: any = screen.getByPlaceholderText('Validator.form.placeDocumentNumber');
    // type document number
    userEvent.type(input, '101432568');
    await act(() => wait(5002));
    expect(input.value).toBe('101432568');

    //Validate button
    const validateBtn: any = screen.getByText('Validator.form.validateBtn');
    expect(validateBtn.disabled).toBe(false);
    // click validate button
    await userEvent.click(validateBtn);
    // await act(async () => {
    // });
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    // screen.debug();
    const successModal = screen.getByText('Validator.modal.alreadyLinked300');
    expect(successModal).toBeDefined();
  });

  it('Execute service to show error modal', async () => {
    global.window = Object.create(window);
    window['grecaptcha'] = {
      ready: () => jest.fn(),
      execute: () => Promise.resolve(() => jest.fn())
    };
    (axios.create().post as jest.Mocked<any>).mockImplementation(() =>
      Promise.resolve({
        status: 500
      })
    );
    render(<Validator history={historyMock}></Validator>);
    const selectBtn = screen.getByText('Validator.selectBtn');
    expect(selectBtn).toBeDefined();
    // // Click to selectBtn
    userEvent.click(selectBtn);
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));

    // FORM
    // Get entity selctForm
    const advisorEntitySelect = screen.getByLabelText('Validator.form.labelAdvisorEntity');
    await act(async () => {
      await selectEvent.select(advisorEntitySelect, 'Banco Popular');
    });
    // Select an option for advisor entity
    userEvent.click(screen.getByText('Banco Popular'));

    // Get document type selctForm
    const documentTypeSelect = screen.getByLabelText('Validator.form.labelDocumentType');
    await act(async () => {
      await selectEvent.select(documentTypeSelect, 'Número de Identificación Tributaria');
    });
    // Select an option for document type
    userEvent.click(screen.getByText('Número de Identificación Tributaria'));

    // Get input of the form
    const input: any = screen.getByPlaceholderText('Validator.form.placeDocumentNumber');
    // type document number
    userEvent.type(input, '101432568');
    await act(() => wait(5002));
    expect(input.value).toBe('101432568');

    //Validate button
    const validateBtn: any = screen.getByText('Validator.form.validateBtn');
    expect(validateBtn.disabled).toBe(false);
    // click validate button
    await userEvent.click(validateBtn);
    // await act(async () => {
    // });
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    const errorModal = screen.getByText('Validator.modal.error.description');
    expect(errorModal).toBeDefined();
  });

  it('Execute service to show error modal with hhtp status 200', async () => {
    global.window = Object.create(window);
    window['grecaptcha'] = {
      ready: () => jest.fn(),
      execute: () => Promise.resolve(() => jest.fn())
    };
    (axios.create().post as jest.Mocked<any>).mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          data: {
            getAccountQrValidation: {
              MsgRsHdr: {
                Status: {
                  StatusCode: 421,
                  ServerStatusCode: 421,
                  StatusDesc: 'Test error modal'
                }
              }
            }
          }
        }
      })
    );
    render(<Validator history={historyMock}></Validator>);
    const selectBtn = screen.getByText('Validator.selectBtn');
    expect(selectBtn).toBeDefined();
    // // Click to selectBtn
    userEvent.click(selectBtn);
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));

    // FORM
    // Get entity selctForm
    const advisorEntitySelect = screen.getByLabelText('Validator.form.labelAdvisorEntity');
    await act(async () => {
      await selectEvent.select(advisorEntitySelect, 'Banco de Occidente');
    });
    // Select an option for advisor entity
    userEvent.click(screen.getByText('Banco de Occidente'));

    // Get document type selctForm
    const documentTypeSelect = screen.getByLabelText('Validator.form.labelDocumentType');
    await act(async () => {
      await selectEvent.select(documentTypeSelect, 'Cédula de ciudadanía');
    });
    // Select an option for document type
    userEvent.click(screen.getByText('Cédula de ciudadanía'));

    // Get input of the form
    const input: any = screen.getByPlaceholderText('Validator.form.placeDocumentNumber');
    // type document number
    userEvent.type(input, '123456');
    await act(() => wait(5002));
    expect(input.value).toBe('123456');

    //Validate button
    const validateBtn: any = screen.getByText('Validator.form.validateBtn');
    expect(validateBtn.disabled).toBe(false);
    // click validate button
    await userEvent.click(validateBtn);
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));
    await act(() => wait(1005));

    const errorModal = screen.getByText('Validator.modal.error.description');
    expect(errorModal).toBeDefined();
  });
});
