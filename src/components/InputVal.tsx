interface InputErrorProps {
  errorMessage: string; // More descriptive name
}

function InputVal({ errorMessage }: InputErrorProps) {
  return (
    <div className="ml-4 text-sm text-red-500" role="alert"> 
      {errorMessage}
    </div>
  );
}

export default InputVal;