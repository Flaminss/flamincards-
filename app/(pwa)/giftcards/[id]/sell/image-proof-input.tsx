import { Button, Chip } from "@nextui-org/react";
import { ImagePlusIcon, Trash2 } from "lucide-react";
import Files from "react-files";

type FileInputPayload = {
  id: string;
  type: string;
  name: string;
  preview: { type: string; url: string };
  extension: string;
  url: string;
  sizeReadable: number;
} & BlobPart;

type ImageProofInputProps = {
  payloads: FileInputPayload[];
  payloadUploadErrors: string[];
  payloadMaxByteSize: number;
  allowUploadOnClick: boolean;
  bulkSelectUploadMaxCount: number;
  onFileInputChange: (newUploads: FileInputPayload[]) => void;
  onRemovePayload: (payloadId: string) => void;
};

export default function ImageProofInput({
  payloads,
  payloadUploadErrors,
  payloadMaxByteSize,
  allowUploadOnClick,
  bulkSelectUploadMaxCount,
  onFileInputChange,
  onRemovePayload,
}: ImageProofInputProps) {
  // const [payloadUploadErrors, setFileUplaodError] = useState("");
  // const [files, setFiles] = useState([] as FileInputPayload[]);

  // const handleChange = (newFiles: any[]) => {
  //   setFiles((prevFiles) => {
  //     let exceededLimit = false;
  //     const curatedFiles = [...prevFiles];

  //     newFiles.forEach((newFile) => {
  //       if (curatedFiles.length < maxUploadableFiles) {
  //         curatedFiles.push(newFile);
  //       } else {
  //         exceededLimit = true;
  //       }
  //     });

  //     // setFileUplaodError(() => {
  //       const message = "Max amount of payloads reached";
  //       return !exceededLimit ? "" : message;
  //     });

  //     return curatedFiles;
  //   });
  // };

  // const handleFileRemove = (fileId: any) => {
  //   setFiles((prevFiles) => {
  //     // setFileUplaodError("");
  //     return prevFiles.filter((prevFile) => prevFile.id !== fileId);
  //   });
  // };

  if (payloads.length > 0) {
    payloads.map((payload) => {
      return (
        <div className="relative border rounded-lg overflow-hidden">
          <img
            src={payload.preview.url}
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
              onClick={() => onRemovePayload(payload.id)}
            />
          </Button>
        </div>
      );
    });
  }

  return (
    <Files
      className="flex flex-col items-center justify-center w-full h-48.. border.. border-dashed.. border-default-400 bg-default-100 rounded-md shadow cursor-pointer"
      accepts={["image/*", "video/mp4"]}
      onFileInputChange={onFileInputChange}
      single
      maxFiles={bulkSelectUploadMaxCount}
      maxFileSize={payloadMaxByteSize}
      clickable={allowUploadOnClick}
    >
      <div className="flex flex-col items-center justify-center text-center pt-8 pb-8 px-4">
        <ImagePlusIcon className="size-10 mb-4 text-zinc-400" />

        <p className="mb-2 dark:text-zinc-100 hover:text-zinc-200..">
          <span className="font-medium">Upload Card Image</span>{" "}
          <span className="text-sm">or drag and drop</span>
        </p>

        <p className="text-xs mb-6 font-light">JPG or MP4 (Max Size. 1.5MB)</p>

        <p className="text-xs text-warning">Ensure you payload clear images</p>
      </div>
    </Files>
  );
}
