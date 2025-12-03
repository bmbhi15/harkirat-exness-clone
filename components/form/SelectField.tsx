import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectFieldProps } from "@/types/global";
import { Label } from "../ui/label";
import { Controller } from "react-hook-form";

const SelectField = ({
  name,
  label,
  placeholder,
  options,
  control,
  error,
  required,
}: SelectFieldProps) => {
  return (
    <div className="space-y-4 mb-4">
      <Label className="form-label">{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="select-trigger">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((item) => (
                <SelectItem
                  key={item.label}
                  value={item.value}
                  className="form-input"
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default SelectField;
