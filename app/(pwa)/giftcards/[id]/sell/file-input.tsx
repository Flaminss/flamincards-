import React, { useState } from "react";
import Files from "react-files";
import axios from "axios";
import NextImage from "next/image";
import {
  CircleAlertIcon,
  CloudUploadIcon,
  RecycleIcon,
  TrashIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";

export default function FileInput() {
  const maxUploadableFiles = 4;
  const [fileUploadError, setFileUplaodError] = useState("");
  const [files, setFiles] = useState(
    [] as ({
      id: string;
      type: string;
      name: string;
      preview: { type: string; url: string };
      extension: string;
      url: string;
      sizeReadable: number;
    } & BlobPart)[]
  );

  const handleChange = (newFiles: any[]) => {
    setFiles((prevFiles) => {
      let exceededLimit = false;
      const curatedFiles = [...prevFiles];

      newFiles.forEach((newFile) => {
        if (curatedFiles.length < maxUploadableFiles) {
          curatedFiles.push(newFile);
        } else {
          exceededLimit = true;
        }
      });

      setFileUplaodError(() => {
        const message = "Max amount of uploads reached";
        return !exceededLimit ? "" : message;
      });

      return curatedFiles;
    });
  };

  const handleFileRemove = (fileId: any) => {
    setFiles((prevFiles) => {
      setFileUplaodError("");
      return prevFiles.filter((prevFile) => prevFile.id !== fileId);
    });
  };

  const handleClearFiles = () => {
    setFiles([]);
  };

  const handleUploadFiles = () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append(
        file.id,
        new Blob([file], { type: file.type }),
        file.name || "file"
      );
    });

    axios
      .post("/files", formData)
      .then(() => {
        window.alert(`${files.length} files uploaded succesfully!`);
        setFiles([]);
      })
      .catch((err) => {
        window.alert(`Error uploading files: ${err.message}`);
      });
  };

  return (
    <div>
      <label className="block text-base mb-2.5">Upload Your Proof</label>

      <Files
        className="flex flex-col items-center justify-center w-full h-48.. border border-dashed border-default-400 bg-default-100 rounded-md shadow cursor-pointer"
        dragActiveClassName="files-dropzone-active"
        accepts={["image/*", "video/mp4"]}
        onChange={handleChange}
        multiple
        maxFiles={maxUploadableFiles}
        maxFileSize={1_500_000}
        clickable={!fileUploadError}
      >
        <div className="flex flex-col items-center justify-center pt-7 pb-6">
          {fileUploadError ? (
            "😡 You no fit read instructions shey!"
          ) : (
            <>
              <CloudUploadIcon className="size-10 mb-2 text-zinc-400" />
              <p className="mb-1 text-sm  dark:text-gray-400">
                <span className="font-semibold">Choose from my media</span> or
                drag and drop
              </p>
              <p className="text-xs mb-4 text-danger">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
              <p className="font-medium ps-1 py-1 flex gap-x-1.5 items-center text-sm text-warning uppercase mb-2">
                Plesase, Ensure you upload clear pictures
              </p>
            </>
          )}
        </div>
      </Files>

      {files.length > 0 && (
        <>
          <ul className="mt-6 grid gap-y-2">
            {files.map((file) => (
              <li
                key={file.id}
                className="flex items-center gap-x-3 bg-content1 rounded-lg p-2.5"
              >
                <div className="size-12 aspect-square shadow rounded-md overflow-hidden border">
                  {file.preview.type === "image" ? (
                    <img
                      className="object-fill w-full h-full"
                      src={file.preview.url}
                    />
                  ) : (
                    <div className="files-list-item-preview-extension w-full h-full text-xs uppercase grid place-items-center font-medium">
                      {file.extension}
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="mb-1 text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[20ch]">
                    {file.name}
                  </div>
                  <div className="text-xs font-semibold text-success">
                    {file.sizeReadable}
                  </div>
                </div>
                <button
                  className="p-2 ms-auto hover:text-danger"
                  onClick={() => handleFileRemove(file.id)}
                >
                  <TrashIcon className="size-4" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end py-2">
            <button
              className="text-sm py-2.5 text-danger font-medium hover:text-danger-600"
              onClick={handleClearFiles}
            >
              Delete all uploads
            </button>
          </div>
        </>
      )}
    </div>
  );
}
