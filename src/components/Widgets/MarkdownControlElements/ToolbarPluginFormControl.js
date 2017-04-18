import React, { PropTypes } from 'react';
import { resolveWidget } from '../../Widgets';
import styles from './ToolbarPluginFormControl.css';

const ToolbarPluginFormControl = ({
  field,
  value,
  pluginData,
  onAddAsset,
  onRemoveAsset,
  getAsset,
  onChange,
}) => {
  const widget = resolveWidget(field.get('widget') || 'string');
  const key = `field-${ field.get('name') }`;
  const Control = widget.control;
  const controlProps = { field, value, onAddAsset, onRemoveAsset, getAsset, onChange };

  return (
    <div className={styles.control} key={key}>
      <label className={styles.label} htmlFor={key}>{field.get('label')}</label>
      <Control {...controlProps}/>
    </div>
  );
};

export default ToolbarPluginFormControl;
