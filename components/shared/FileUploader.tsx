import React, { Dispatch, SetStateAction } from "react";

type FileUploaderProps = {
  imageUrl: string;
  onFiledChange: () => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export default function FileUploader({
  onFiledChange,
  setFiles,
  imageUrl,
}: FileUploaderProps) {
  return <div>FileUploader</div>;
}
