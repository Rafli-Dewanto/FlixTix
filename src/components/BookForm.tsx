import { Label, TextInput } from "flowbite-react";
import React, { SyntheticEvent } from 'react'
import PrimaryButton from "./PrimaryButton";

export default function BookForm({
    setName,
    setAge,
    handleSubmit
}: {
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAge: React.Dispatch<React.SetStateAction<number>>,
    handleSubmit: (e: SyntheticEvent) => void
}) {
    return (
        <div className="flex flex-col w-full max-w-lg px-4 space-y-4 sm:justify-start gap-y-6 lg:mr-6">
            <form className="form" style={{ marginRight: 0 }}>
                <div>
                    <div className="block mb-2">
                        <Label htmlFor="name" value="Name" />
                    </div>
                    <TextInput
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="mb-6">
                    <div className="block mt-2 mb-2">
                        <Label htmlFor="age" value="Age" />
                    </div>
                    <TextInput
                        onChange={(e) => setAge(parseInt(e.target.value, 10))}
                        id="age"
                        type="number"
                        required
                    />
                </div>
                <PrimaryButton onClick={handleSubmit} type="submit">
                    Submit
                </PrimaryButton>
            </form>
        </div>
    )
};
