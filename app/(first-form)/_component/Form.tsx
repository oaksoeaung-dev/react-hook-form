"use client"
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";

interface Inputs {
    name: string;
}

export default function Form()
{
    const {register, handleSubmit,watch,formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    console.log(watch("name"));

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>
            <div>
                <label className={"text-sm font-semibold mb-1 text-zinc-600"}>Name</label>
                <input {...register("name", {required: true})} className={"py-1.5 px-2 border focus:outline-none focus:border-zinc-700 w-full rounded-lg"} />
                {errors.name && <span>This field is required</span>}
            </div>

            <Button type={"submit"}>Submit</Button>
        </form>
    )
}