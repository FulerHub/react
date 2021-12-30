import React from 'react';
import {Formik} from "formik";
import {Button, Input} from "antd";
import * as yup from "yup";

class YoutubeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }
    FormSubmit(value){
        let params = (new URL(value.url)).searchParams;
        console.log(params.get("v"));
        this.props.LoadInfo(params.get("v"));

    }
    render() {
        let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

        const valSchema = yup.object().shape({
            url: yup.string().typeError('Это поле принимает только текст')
                .matches( rUrl, 'Не коректный URL')
                .required('Это поле обязательное')
                .min(5,'Поле должно состоять не менее чем из 5 символов'),
        })
        return (
            <div className={"youtube-form"}>
                <Formik
                    initialValues={{
                        url:''
                    }}
                    validationSchema={valSchema}
                    validateOnBlur
                    onSubmit={(values) => this.FormSubmit(values)}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, isSubmitting}) => (
                        <form onSubmit={handleSubmit}>
                            <div className={errors.url && touched.url && 'ant-form-item-has-error'}>
                                <Input name="url" style={{ width: 'calc(100% - 100px) ' }} size="large" onChange={handleChange} onBlur={handleBlur} value={values.url} placeholder="Link youtube video" />
                                <Button htmlType="submit" size="large" type="primary">Search</Button>
                            </div>
                            {errors.url && touched.url && <p style={{color:"#ff0000"}}>{errors.url}</p> }

                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}


export default YoutubeForm;