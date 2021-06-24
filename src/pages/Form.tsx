import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { IForm, List } from "../types/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/Form.scss';

const Form: React.FC = () => {
    const [form, setForm] = useState<IForm>({
        input: null,
        textarea: null,
        checkbox: null
    })
    const [dataOutput, setDataOutput] = useState<IForm>({
        input: null,
        textarea: null,
        checkbox: null
    })
    const [showOutput, setShowOutput] = useState<boolean>(false);

    const handleChangeInput = (type: List, value: string): void => {
        if (type === List.Input) {
            setForm({ ...form, input: +value });
        }
        if (type === List.Textarea) {
            setForm({ ...form, textarea: +value });
        }
        if (type === List.Checkbox) {
            setForm({ ...form, checkbox: +value });
        }
    }

    const handleClickButton = (): void => {
        const isWrongData: boolean = !Number.isInteger(form.input)
            || !Number.isInteger(form.textarea)
            || !Number.isInteger(form.checkbox)
            || !form.input
            || !form.textarea
            || !form.checkbox
        if (isWrongData) {
            toast.error('Invalid input! Try again!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setDataOutput(form);
            setShowOutput(true);
        }
    }

    return (
        <div className="wrapper">

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <form className="form">
                <span className="form__title">Count blocks</span>
                <TextField
                    type="number"
                    label="Input"
                    className="form__input"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInput(List.Input, e.target.value)} />
                <TextField
                    type="number"
                    label="Textarea"
                    className="form__input"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInput(List.Textarea, e.target.value)} />
                <TextField
                    type="number"
                    label="Checkbox"
                    className="form__input"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInput(List.Checkbox, e.target.value)} />
                <Button variant="contained" color="primary" className="form__input" onClick={handleClickButton} >
                    build
                </Button>
            </form>
            {
                showOutput && (
                    <form className="form">
                        <span className="form__title">Output</span>
                        {
                            new Array(Number(dataOutput.input)).fill(0).map((_, idx) => (
                                <input key={idx * Date.now()} placeholder={`Input ${idx + 1}`} className="form__out" />
                            ))
                        }
                        {
                            new Array(Number(dataOutput.textarea)).fill(0).map((_, idx) => (
                                <textarea key={idx * Date.now()} placeholder={`Textarea ${idx + 1}`} className="form__out" />
                            ))
                        }
                        {
                            new Array(Number(dataOutput.checkbox)).fill(0).map((_, idx) => (
                                <label key={idx * Date.now()} htmlFor={`check-${idx}`} className="form__out">Checkbox {idx + 1}
                                    <input id={`check-${idx}`} type="checkbox" className="form__out" />
                                </label>
                            ))
                        }
                    </form>
                )
            }
        </div>
    )
}

export default Form;
