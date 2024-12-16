import Link from "next/link";

export default function StoriesLine({
    title, count
}:{title:string, count:string}) {
    return(
        <Link href="#" className="mb-1 block">
            <span className="text-[10vw] fm-reckless">{title}</span>
            <sup className="top-[-1.3rem] ml-2">{count}</sup>
        </Link>
    )
}