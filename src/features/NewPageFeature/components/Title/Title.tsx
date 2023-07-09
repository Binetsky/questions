import React from 'react';
import styles from '@features/NewPageFeature/styles.module.scss';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { Control, FieldValues } from 'react-hook-form';
import { InputFieldController } from '@layout/InputFieldController';

interface TitleProps {
  control: Control<FieldValues, unknown>;
  header: string;
  id: number;
  titlePlaceholder: string;
  subtitlePlaceholder: string;
  deleteButtonHandler?: (id: number) => void;
}

/**
 * Компонент заполнения заголовка вступительного, заключительного блоков, группы вопросов и вопросов в форме создания опроса
 * @param props - TitleProps
 * @returns React.FC
 */
export const Title: React.FC<TitleProps> = (props) => {
  const {
    control, id, titlePlaceholder, subtitlePlaceholder, deleteButtonHandler, header,
  } = props;

  return (
    <div className={`${styles['group-title']} p-b-24`}>
      <div className="headline-4">
        {header}
        {deleteButtonHandler && (
          <button
            type="button"
            className="button sm tertiary square m-l-12"
            onClick={() => deleteButtonHandler(id)}
          >
            <i className="ra-icon-trash" />
          </button>
        )}
      </div>
      <div className="caption-2 p-b-8">
        id:
        {' '}
        {id}
      </div>
      <div className="flex flex-middle p-b-12">
        <div className="m-r-12">Заголовок</div>
        <InputFieldController
          control={control}
          name={`group-title-${id}`}
          placeholder={titlePlaceholder}
          size={FormElementSizes.Medium}
          type={InputType.Text}
          isDisabled={false}
          isRequired
        />
      </div>
      <div className="flex flex-middle">
        <div className="m-r-12">
          Подзаголовок
          <div className="caption-2 txt-secondary">(необязательно)</div>
        </div>
        <InputFieldController
          control={control}
          name={`group-subtitle-${id}`}
          placeholder={subtitlePlaceholder}
          size={FormElementSizes.Medium}
          type={InputType.Text}
          isDisabled={false}
          isRequired={false}
        />
      </div>
    </div>
  );
};
