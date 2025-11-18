import { FormInputProps } from "@/types/global";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ErrorMessage } from "@hookform/error-message";

const InputField = ({
  name,
  label,
  placeholder,
  type,
  register,
  error,
  validation,
  disabled,
  value,
}: FormInputProps) => {
  return (
    <div className="space-y-4 mb-4">
      <Label className="form-label">{label}</Label>
      <Input
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        value={value}
        className="form-input"
        {...register(name, validation)}
      />
      <ErrorMessage
        errors={error}
        name={name}
        render={({ message }) => <p className="text-red-600">{message}</p>}
      />
    </div>
  );
};

export default InputField;
