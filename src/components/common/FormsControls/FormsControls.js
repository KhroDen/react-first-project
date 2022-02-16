import React from "react"
import styles from "./FormsControls.module.css";
import { Field } from 'redux-form';



const FormControl = ({ input, meta, element, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
			<div>
				{props.children}
			</div>
			{hasError && <span>{meta.error}</span>}
		</div >
	)
}


export const Textarea = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />
		</FormControl>
	)
}

export const Input = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	)
}

export const createField = (name, component, placeholder, validators, props = {}, text = "") =>
(<div>
	<Field name={name}
		component={component}
		placeholder={placeholder}
		validate={validators}
		{...props}
	/>
	{text}
</div>)
