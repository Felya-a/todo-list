import './FormsControls.scss';

const FormsControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  // <div className={"formControl" + (hasError ? " error" : '')}>
  return (
    <props.name {...props} {...input} className={"formControl" + (hasError ? " error" : '')}></props.name>
  )
}
{/* {hasError &&
      <span>
        {meta.error}
      </span>
    } */}
// </div>

export const Textarea = (props) => {
  return <FormsControl name="textarea" {...props} />
}

export const Input = (props) => {
  return <FormsControl name="input" {...props} />
}