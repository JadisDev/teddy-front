import React, { ChangeEvent } from "react";
import { Input } from "@chakra-ui/react";

const formatCurrency = (value: string | number) => {
  const numericValue = parseFloat(value.toString().replace(/\D/g, ""));

  if (isNaN(numericValue) || numericValue === 0) {
    return "";
  }

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue / 100);

  return formattedValue;
};

const parseCurrency = (value: string) => {
  return parseFloat(value.toString().replace(/\D/g, ""));
};

interface MaskedInputProps {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

export const MaskedInput: React.FC<MaskedInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const numericValue = parseCurrency(rawValue);

    onChange({ target: { value: numericValue } } as any);
  };

  return (
    <Input
      {...props}
      value={formatCurrency(value)}
      onChange={handleInputChange}
      textAlign="left"
    />
  );
};
