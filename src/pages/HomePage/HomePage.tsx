import { CipherEditor } from "./components/CipherEditor"

export const HomePage = () => {
    return (
        <div className="mt-20 mb-20">
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-6xl mb-10">SweetCipher</h1>
            <CipherEditor/>
        </div>
        </div>
    )
}