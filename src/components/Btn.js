const Btn = ({buttonText, value, setValue}) => {
  return (
    <button 
        className={buttonText === value ? "selected" : null}
        type="button"
        onClick={() => setValue(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Btn