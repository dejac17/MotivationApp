import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';


export const TodoForm = ({onFormSubmit}) => {
    const [form] = Form.useForm();

    const onFinish = () => {
        onFormSubmit({
            title: form.getFieldsValue('title'),
            completed: false 
        });
        console.log(form.getFieldValue('title'));

        form.resetFields();
    }

    return(
        <Form
            form={form}
            onFinish={onFinish}
            layout='horizontal'
            className='todo-form'>
            {/* Grid spacing and responsiveness */}
            <Row gutter={20}>
                <Col  xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item name={'title'}>
                    </Form.Item>
                </Col>
                <Col  xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type='primary' htmlType='submit' block>
                        Add Task
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

