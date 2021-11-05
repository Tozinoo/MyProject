import React from "react";
import TextField from "@material-ui/core/TextField";
import { Controller, useForm } from "react-hook-form";

export const FormWithHookForm = () => {
    const { handleSubmit, reset, control } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form>
            <Controller
                name={"textValue"}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                        onChange={onChange}
                        value={value}
                        label={"Text Value"}
                    />
                )}
            />
        </form>
    );
};
