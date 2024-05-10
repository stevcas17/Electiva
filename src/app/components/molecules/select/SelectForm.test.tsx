import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { SelectForm } from './SelectForm';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';
import selectEvent from 'react-select-event';
import userEvent from '@testing-library/user-event';

const checkedSelect = jest.fn();

jest.mock('');

it('SelectForm Load Error', async () => {
  const MockSelect = () => {
    const [SelectOption, setSelectOption] = useState();
    return (
      <form data-testid="typeDocumentSelect">
        <SelectForm
          name="typeDocument"
          inputId="typeDocument"
          dataTestid="typeDocument"
          label={'typeDocument'}
          value={SelectOption || null}
          onChange={(e: any) => setSelectOption(e)}
          onBlur={checkedSelect}
          placeholder={'PlaceTypeDocument'}
          options={[{ label: 'CC', value: 'CC' }]}
          checkError={true}
          messageError={'register'}
        />
      </form>
    );
  };
  await act(async () => {
    render(<MockSelect />);
  });
  // typeDocument
  const typeDocument = screen.getByTestId('typeDocumentSelect');
  const label = screen.getByLabelText('typeDocument');
  expect(typeDocument).toHaveFormValues({ typeDocument: '' });
  await act(async () => {
    await selectEvent.select(label, 'CC');
  });
  expect(typeDocument).toHaveFormValues({ typeDocument: 'CC' });
  act(() => {
    fireEvent.click(screen.getByText('CC'));
  });
  userEvent.tab();
  userEvent.tab();
});
it('SelectForm Load Success', async () => {
  const MockSelect = () => {
    const [Select, setSelect] = useState();
    return (
      <form data-testid="typeDocumentSelect2">
        <SelectForm
          name="typeDocument"
          inputId="typeDocument"
          dataTestid="typeDocument"
          label={'typeDocument'}
          value={Select || null}
          onChange={(e: any) => setSelect(e)}
          onBlur={checkedSelect}
          placeholder={'PlaceTypeDocument'}
          options={[{ label: 'CC', value: 'CC' }]}
          checkSuccess={true}
          messageSuccess={'register'}
        />
      </form>
    );
  };
  await act(async () => {
    render(<MockSelect />);
  });
  // typeDocument
  const typeDocument = screen.getByTestId('typeDocumentSelect2');
  const label = screen.getByLabelText('typeDocument');
  expect(typeDocument).toHaveFormValues({ typeDocument: '' });
  await act(async () => {
    await selectEvent.select(label, 'CC');
  });
  expect(typeDocument).toHaveFormValues({ typeDocument: 'CC' });
  act(() => {
    fireEvent.click(screen.getByText('CC'));
  });
  userEvent.tab();
  userEvent.tab();
});
it('SelectForm Load isDisabled', async () => {
  const MockSelect = () => {
    const [Select, setSelect] = useState();
    return (
      <form data-testid="typeDocumentSelect3">
        <SelectForm
          name="typeDocument"
          inputId="typeDocument"
          dataTestid="typeDocument"
          label={'typeDocument'}
          value={Select || null}
          onChange={(e: any) => setSelect(e)}
          onBlur={checkedSelect}
          placeholder={'PlaceTypeDocument'}
          options={[{ label: 'CC', value: 'CC' }]}
          checkSuccess={true}
          messageSuccess={'register'}
          disabled={true}
        />
      </form>
    );
  };
  await act(async () => {
    render(<MockSelect />);
  });
  // typeDocument
  const typeDocument = screen.getByTestId('typeDocumentSelect3');
  expect(typeDocument).toHaveFormValues({});
});
it('SelectForm Load assistiveText', async () => {
  const MockSelect = () => {
    const [Select, setSelect] = useState();
    return (
      <form data-testid="typeDocumentSelect4">
        <SelectForm
          name="typeDocument"
          inputId="typeDocument"
          dataTestid="typeDocument"
          label={'typeDocument'}
          value={Select || null}
          onChange={(e: any) => setSelect(e)}
          eventChange={checkedSelect}
          placeholder={'PlaceTypeDocument'}
          options={[{ label: 'CC', value: 'CC' }]}
          assistiveText={'true'}
        />
      </form>
    );
  };
  await act(async () => {
    render(<MockSelect />);
  });
  // typeDocument
  const typeDocument = screen.getByTestId('typeDocumentSelect4');
  const label = screen.getByLabelText('typeDocument');
  expect(typeDocument).toHaveFormValues({ typeDocument: '' });
  await act(async () => {
    await selectEvent.select(label, 'CC');
  });
  expect(typeDocument).toHaveFormValues({ typeDocument: 'CC' });
  act(() => {
    fireEvent.click(screen.getByText('CC'));
  });
  userEvent.tab();
  userEvent.tab();
});
