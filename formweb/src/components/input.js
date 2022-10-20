import React, { useEffect } from "react";
import { useField } from "@unform/core";

export default function Input({ name }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {}, []);

  return (
  <input onChange={e => e.target.value}/>
  )
}
