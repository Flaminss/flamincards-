import { Button, Chip } from "@nextui-org/react";
import { ImagePlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import Files from "react-files";

const maxUploadableFiles = 1;

export default function ProofInput() {
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

  if (files.length > 0) {
    return (
      <div className="relative border rounded-lg overflow-hidden">
        <img
          src={files[0].preview.url}
          className="w-full min-h-20 object-cover max-h-[380px]"
        />
        <Button
          isIconOnly
          size="sm"
          radius="sm"
          color="danger"
          className="absolute top-2 right-2"
        >
          <Trash2
            className="size-5"
            onClick={() => handleFileRemove(files[0].id)}
          />
        </Button>
      </div>
    );
  }

  return (
    <Files
      className="flex flex-col items-center justify-center w-full h-48.. border.. border-dashed.. border-default-400 bg-default-100 rounded-md shadow cursor-pointer"
      accepts={["image/*", "video/mp4"]}
      onChange={handleChange}
      single
      maxFiles={maxUploadableFiles}
      maxFileSize={1_500_000}
      clickable={!fileUploadError}
    >
      <div className="flex flex-col items-center justify-center text-center pt-8 pb-8 px-4">
        <ImagePlusIcon className="size-10 mb-4 text-zinc-400" />

        <p className="mb-2 dark:text-zinc-100 hover:text-zinc-200..">
          <span className="font-medium">Upload Card Image</span>{" "}
          <span className="text-sm">or drag and drop</span>
        </p>

        <p className="text-xs mb-6 font-light">JPG or MP4 (Max Size. 1.5MB)</p>

        <p className="text-xs text-warning">Ensure you upload clear images</p>
      </div>
    </Files>
  );
}
