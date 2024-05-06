type ForeverMobileScreenProps = {
    children: any,
}

export default function ForeverMobileScreen({ children }: ForeverMobileScreenProps) {
    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div className="border-2 border-slate-400 rounded-md max-w-sm overflow-y-scroll overflow-x-hidden max-h-[580px]">{children}</div>
        </div>
    );
}