import React, { useState} from 'react';
import { Form, Button, Modal } from 'antd';
import PasswordAndConfirm from '../common/PasswordAndConfirm';
import request from '../request';
import '../index.less';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

export default (props) => {
  const [form] = Form.useForm();
  const {
    proxy,
    account,
    setNext,
    language,
    onSignIn = () => {},
  } = props;
  const [loading, setLoading] = useState(false);

  // 重置密码
  const onFinish = ({ password }) => {
    setLoading(true);
    request({
      url: `${proxy}/user/updatePassword.json`,
      method: 'POST',
      body: {
        type: 'forget',
        number: account,
        newPassword: password,
      },
      onSuccess: ({ dataObject = {} }) => {
        if (dataObject.flag) {
          setNext(3);
        } else {
          Modal.confirm({
            title: language.reset_confirm_title,
            okText: language.reset_confirm_ok_text,
            cancelText: language.reset_confirm_cancel_text,
            onOk() {
              setNext(0);
              onSignIn();
            },
          });
        }
      },
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      <Form {...formItemLayout} requiredMark={false} onFinish={onFinish}>
        <PasswordAndConfirm
          form={form}
          language={language}
        />
        <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <Button loading={loading} type="primary" htmlType="submit" size="large" className="ry_common_width_100">
            {language.next}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
