import React from 'react';
import styles from '@features/NewPageFeature/styles.module.scss';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { InputFieldController } from '@layout/InputFieldController';
import { NewSurveyContext } from '@context/NewSurveyContext';

interface TitleProps {
  header: string;
  id: number;
  titlePlaceholder: string;
  subtitlePlaceholder: string;
  titleName: string;
  subtitleName: string;
  deleteButtonHandler?: (id: number) => void;
}

/**
 * Компонент заполнения заголовка вступительного, заключительного блоков, группы вопросов и вопросов в форме создания опроса
 * @param props - TitleProps
 * @returns React.FC
 */
export const Title: React.FC<TitleProps> = (props) => {
  const {
    id, titlePlaceholder, subtitlePlaceholder, deleteButtonHandler, header, titleName, subtitleName,
  } = props;
  const { control } = React.useContext(NewSurveyContext);

  if (!control) {
    return null;
  }

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
          name={titleName}
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
          name={subtitleName}
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
