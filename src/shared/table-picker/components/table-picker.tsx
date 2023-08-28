import Select from 'react-select'

import {
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import { Fragment, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useRouter } from 'next/router';

const TablePicker = forwardRef((props: {
  mode: 'single' | 'multiple',
  form: { register: any, errors: any, setValue: any },
  onSelect?: any,
  selected?: Array<any>,
  name: string,
  Tag: any,
  title: string,
  selector?: string,
  disabled?: boolean | undefined,
  filter?: any,
  label?: string,
  tableProps?: any,
}, ref: any) => {

  const {
    mode,
    onSelect,
    selected = [],
    form,
    name,
    Tag,
    title,
    selector = 'id',
    disabled = undefined,
    filter,
    label = 'name',
    tableProps = {},
  } = props;
  const { register, errors, setValue } = form;

  const router = useRouter();
  const query = router.query;

  const generateSelectOption = (row: any) => {
    const arrLabel = label.split('.');
    let newLabel = {...row};
    for (const l of arrLabel) {
      newLabel = newLabel[l];
    }
    return {value: row[selector], label: newLabel}
  }

  const [show, setShow] = useState(false);
  const [selectOptions, setSelectOptions] = useState(selected.map((c: any) => generateSelectOption(c)));
  const [rows, setRows] = useState(selected);

  const disabledButton = (disabled !== undefined) ? disabled : query[name];

  useEffect(() => {
    if (selected) {
      setSelectOptions(selected.map((c: any) => generateSelectOption(c)));
    }
  }, [selected]);

  useEffect(() => {
    if (mode === 'single') {
      if (selectOptions.length > 0) {
        setValue(`${name}`, selectOptions.map((option: any) => option.value)[0]);
      }
    } else {
      setValue(`${name}s`, selectOptions.map((option: any) => option.value));
    }
  }, [selectOptions]);

  const handleSelectRows = (rows: any) => {
    setRows(rows);
    setSelectOptions(rows.map((c: any) => { return {value: c[selector], label: c[label]} }));
    setShow(false);
    if (onSelect) {
      onSelect(rows);
    }
  }

  useImperativeHandle(ref, () => ({
    resetPicker() {
      setSelectOptions([]);
    },
  }));

  return (
    <Fragment>
      <div className="mb-1">
        <div className="form-group">
          <label>{title}</label>
          <InputGroup>
            <Select
              isClearable={false}
              isMulti
              options={selectOptions}
              className="react-select custom-react-select"
              classNamePrefix="select"
              value={selectOptions}
            />
            {/*<InputGroupAddon addonType="append">*/}
            {/*  <Button color="primary" onClick={() => setShow(true)} disabled={!!(disabledButton)}>*/}
            {/*    Select*/}
            {/*  </Button>*/}
            {/*</InputGroupAddon>*/}
          </InputGroup>
        </div>
      </div>
      {
        mode && mode === 'single' && (
          <FormGroup>
            <Label for={name} className="hidden">Select</Label>
            <Input
              className="hidden"
              type="select"
              name={name}
              innerRef={register({ required: true })}
              invalid={errors[name] && true}>
              {
                selectOptions && selectOptions.map((option: any, key: any) => {
                  return <option key={`option-${key}`} value={ option.value }>{ option.label }</option>
                })
              }
            </Input>
            {errors && errors[name] && <FormFeedback>{errors[name].message}</FormFeedback>}
          </FormGroup>
        )
      }
      {
        mode && mode === 'multiple' && (
          <FormGroup>
            <Label for={`${name}s`} className="hidden">Select</Label>
            <Input
              className="hidden"
              type="select"
              name={`${name}s`}
              innerRef={register({ required: true })}
              invalid={errors[`${name}s`] && true}
              multiple>
              {
                selectOptions && selectOptions.map((option: any, key: any) => {
                  return <option key={`option-${key}`} value={ option.value }>{ option.label }</option>
                })
              }
            </Input>
            {errors && errors[`${name}s`] && <FormFeedback>{errors[`${name}s`].message}</FormFeedback>}
          </FormGroup>
        )
      }
      <Modal isOpen={show} className="modal-dialog-centered modal-xl" toggle={() => setShow(true)}>
        <ModalHeader toggle={() => setShow(!show)}>
          {title}
        </ModalHeader>
        <ModalBody>
          <Tag
            selectPicker={mode}
            onSelect={(c: any) => handleSelectRows(c)}
            filterOption={filter}
            { ...tableProps }
            selected={rows} />
        </ModalBody>
      </Modal>
    </Fragment>
  )
});

TablePicker.displayName = 'tablePicker';

export default TablePicker;
