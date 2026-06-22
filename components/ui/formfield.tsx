/* form primitives: FormField, Input, Textarea, Select
   used by the login screen (A2) and the report builder modal (D1)
*/

import React from "react";

const INPUT_STYLES =
  "w-full px-[13px] py-[11px] rounded-[10px] " +
  "border border-[var(--line-2)] bg-[rgba(9,6,26,0.45)] " +
  "text-sm text-[var(--ink)] font-sans " +
  "placeholder:text-[var(--muted-2)] " +
  "focus:outline-none focus:border-[var(--violet)] focus:shadow-[0_0_0_3px_var(--violet-soft)]";

//FormField

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, htmlFor, children, className = "" }: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="font-grotesk text-[11px] font-semibold tracking-[0.5px] uppercase text-[var(--muted)]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

//Input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return <input {...props} className={`${INPUT_STYLES} ${className}`} />;
}

//Textarea
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`${INPUT_STYLES} min-h-[74px] resize-y ${className}`}
    />
  );
}

//Select
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export function Select({ children, className = "", ...props }: SelectProps) {
  return (
    <select {...props} className={`${INPUT_STYLES} ${className}`}>
      {children}
    </select>
  );
}