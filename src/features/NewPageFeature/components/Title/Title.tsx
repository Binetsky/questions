import styles from '@features/NewPageFeature/styles.module.scss';
import { InputField } from '@frontend/uikit-rbc/InputField';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import React from 'react';

export const Title = () => {
  const mock = 0;

  return (
    <div className={`${styles['group-title']} p-b-24`}>
      <div className="headline-4">Группа 1</div>
      <div className="caption-2 p-b-8">groupId: asfdlkfn</div>
      <div className="flex flex-middle p-b-12">
        <div className="m-r-12">Заголовок</div>
        <InputField
          value="Заголовок"
          name="groupId-title"
          onChange={() => null}
          size={FormElementSizes.Medium}
          type={InputType.Text}
        />
      </div>
      <div className="flex flex-middle">
        <div className="m-r-12">
          Подзаголовок
          <div className="caption-2 txt-secondary">(необязательно)</div>
        </div>
        <InputField
          value="Подзаголовок"
          name="groupId-subtitle"
          onChange={() => null}
          size={FormElementSizes.Medium}
          type={InputType.Text}
        />
      </div>
    </div>
  );
};
