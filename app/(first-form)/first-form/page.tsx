import Heading from "@/components/Heading";
import Form from "@/app/(first-form)/_component/Form";

export default function page()
{
    return(
        <div className={"space-y-5"}>
            <Heading heading={1} label={"First Form"} />

            <div className={"p-5 border rounded-lg max-w-2xl"}>
                <Form/>
            </div>
        </div>
    )
}