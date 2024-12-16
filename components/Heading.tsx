import {cn} from "@/lib/utils";

type headingProps = {
    heading: 1 | 2 | 3 | 4 | 5 | 6,
    label: string,
    className?: string,
}

export default function Heading({heading, label, className}: headingProps)
{
    switch (heading)
    {
        case 1:
            return (<h1 className={cn("text-[2.125rem] text-zinc-700 font-semibold", className)}>{label}</h1>);
        case 2:
            return (<h2 className={cn("text-[1.875rem] text-zinc-700 font-semibold", className)}>{label}</h2>);
        case 3:
            return (<h3 className={cn("text-[1.5rem] text-zinc-700 font-semibold", className)}>{label}</h3>);
        case 4:
            return (<h4 className={cn("text-[1.25rem] text-zinc-700 font-semibold", className)}>{label}</h4>);
        case 5:
            return (<h5 className={cn("text-[1.125rem] text-zinc-700 font-semibold", className)}>{label}</h5>);
        case 6:
            return (<h6 className={cn("text-[1rem] text-zinc-700 font-semibold", className)}>{label}</h6>);
    }
}