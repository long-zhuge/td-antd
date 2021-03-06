import * as React from 'react';
import cx from 'classnames';
import { Spin } from 'antd';
import './index.less';

export default (props) => {
  const {
    disabled = false,
    loading = false,
    danger = false,
    className,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      type="button"
      disabled={disabled || loading}
      className={cx('td-link-btn', className, {
        'td-link-loading': loading,
        'td-link-danger': danger,
      })}
    >
      {loading ? <Spin size="small" /> : props.children}
    </button>
  );
};
